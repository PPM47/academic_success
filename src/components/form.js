import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const predictions = response.data.prediction;
      const predictionNames = predictions.map((pred) => {
        if (pred === 0) return "Dropout";
        if (pred === 1) return "Enrolled";
        if (pred === 2) return "Graduate";
        return "Unknown";
      });
      setPrediction(predictionNames);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Upload CSV File <div className="triangle-right"></div>{" "}
          <input
            className="form_input"
            type="file"
            name="file"
            accept=".csv"
            onChange={handleFileChange}
            required
          />
        </label>
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>
      {prediction && <p className="output">Prediction: {prediction}</p>}
    </div>
  );
};

export default Form;
