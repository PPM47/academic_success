import { useState } from "react";
import React from "react";
import axios from "axios";

const FormInputField = () => {
  const [formData, setFormData] = useState({
    maritalStatus: 0,
    applicationMode: 0,
    applicationOrder: 0,
    course: 0,
    daytimeEveningAttendance: 0,
    prevQualification: 0,
    prevQualificationGrade: 0,
    nationality: 0,
    mothersQualification: 0,
    fathersQualification: 0,
    mothersOccupation: 0,
    fathersOccupation: 0,
    admissionGrade: 0,
    displaced: 0,
    educationalSpecialNeeds: 0,
    specialNeeds: 0,
    debtor: 0,
    tuitionFeesUpToDate: 0,
    gender: 0,
    scholarshipHolder: 0,
    ageAtEnrollment: 0,
    international: 0,
    curricularfirstSemCredited: 0,
    curricularfirstSemEnrolled: 0,
    curricularfirstSemEvaluations: 0,
    curricularfirstSemApproved: 0,
    curricularfirstSemGrade: 0,
    curricularfirstSemWithoutEvaluations: 0,
    curricularsecondSemCredited: 0,
    curricularsecondSemEnrolled: 0,
    curricularsecondSemEvaluations: 0,
    curricularsecondSemApproved: 0,
    curricularsecondSemGrade: 0,
    curricularsecondSemWithoutEvaluations: 0,
    unemploymentrate: 0,
    inflationrate: 0,
    gdp: 0,
  });
  const columnNames = [
    "Marital status",
    "Application mode",
    "Application order",
    "Course",
    "Daytime/evening attendance",
    "Previous qualification",
    "Previous qualification (grade)",
    "Nacionality",
    "Mother's qualification",
    "Father's qualification",
    "Mother's occupation",
    "Father's occupation",
    "Admission grade",
    "Displaced",
    "Educational special needs",
    "Debtor",
    "Tuition fees up to date",
    "Gender",
    "Scholarship holder",
    "Age at enrollment",
    "International",
    "Curricular units 1st sem (credited)",
    "Curricular units 1st sem (enrolled)",
    "Curricular units 1st sem (evaluations)",
    "Curricular units 1st sem (approved)",
    "Curricular units 1st sem (grade)",
    "Curricular units 1st sem (without evaluations)",
    "Curricular units 2nd sem (credited)",
    "Curricular units 2nd sem (enrolled)",
    "Curricular units 2nd sem (evaluations)",
    "Curricular units 2nd sem (approved)",
    "Curricular units 2nd sem (grade)",
    "Curricular units 2nd sem (without evaluations)",
    "Unemployment rate",
    "Inflation rate",
    "GDP",

  ];
  const [prediction, setPrediction] = useState("");
  const [csvContent, setCsvContent] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert form data to CSV format
    const csvHeaders = columnNames.join(',') + '\n';
    const csvValues = Object.values(formData).join(",") + "\n";
    const csvContent = csvHeaders + csvValues;

    // setCsvContent(csvContent);

    const file = new Blob([csvContent], { type: "text/csv" });

    // Create form data to send to the API
    const data = new FormData();
    data.append("file", file, "formData.csv");

    // Send CSV file to API
    try {
      const response = await axios.post("http://localhost:8000/predict", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.ok) {
        console.log("File successfully uploaded");
      } else {
        console.error("Failed to upload file");
      }
      const predictions = response.data.prediction;
      const predictionNames = predictions.map((pred) => {
        if (pred === 0) return "Dropout";
        if (pred === 1) return "Enrolled";
        if (pred === 2) return "Graduate";
        return "Unknown";
      });
      setPrediction(predictionNames);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="main_field_con">
      <div className="main_text_con">
        <h1>Enter Your Data</h1>
        <div className="ptext">All the values should be numeric.</div>
        {/* <p className="red1">(Enter '0' if you don't have any data)</p> */}
      </div>
      <form className="from-con" onSubmit={handleSubmit}>
        {/* ----------------------------input field------------------------- */}
        <div className="field-con2">
          <label className="label2">Marital status</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Application mode</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="applicationMode"
            value={formData.applicationMode}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Application order</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="applicationOrder"
            value={formData.applicationOrder}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Course</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="course"
            value={formData.course}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Daytime/Evening Attendance</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="daytimeEveningAttendance"
            value={formData.daytimeEveningAttendance}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Previous Qualification</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="prevQualification"
            value={formData.prevQualification}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Previous Qualification Grade</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="prevQualificationGrade"
            value={formData.prevQualificationGrade}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Nationality</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Mother's Qualification</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="mothersQualification"
            value={formData.mothersQualification}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Father's Qualification</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="fathersQualification"
            value={formData.fathersQualification}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Mother's Occupation</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="mothersOccupation"
            value={formData.mothersOccupation}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Father's Occupation</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="fathersOccupation"
            value={formData.fathersOccupation}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Admission Grade</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="admissionGrade"
            value={formData.admissionGrade}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Displaced</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="displaced"
            value={formData.displaced}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Educational Special Needs</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="educationalSpecialNeeds"
            value={formData.educationalSpecialNeeds}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Special Needs</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="specialNeeds"
            value={formData.specialNeeds}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Debtor</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="debtor"
            value={formData.debtor}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Tuition Fees Up to Date</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="tuitionFeesUpToDate"
            value={formData.tuitionFeesUpToDate}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Gender</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Scholarship Holder</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="scholarshipHolder"
            value={formData.scholarshipHolder}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Age at Enrollment</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="ageAtEnrollment"
            value={formData.ageAtEnrollment}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">International</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="international"
            value={formData.international}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular First Sem Credited</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularfirstSemCredited"
            value={formData.curricularfirstSemCredited}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular First Sem Enrolled</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularfirstSemEnrolled"
            value={formData.curricularfirstSemEnrolled}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular First Sem Evaluations</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularfirstSemEvaluations"
            value={formData.curricularfirstSemEvaluations}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular First Sem Approved</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularfirstSemApproved"
            value={formData.curricularfirstSemApproved}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular First Sem Grade</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularfirstSemGrade"
            value={formData.curricularfirstSemGrade}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">
            Curricular First Sem Without Evaluations
          </label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularfirstSemWithoutEvaluations"
            value={formData.curricularfirstSemWithoutEvaluations}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular Second Sem Credited</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularsecondSemCredited"
            value={formData.curricularsecondSemCredited}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular Second Sem Enrolled</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularsecondSemEnrolled"
            value={formData.curricularsecondSemEnrolled}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular Second Sem Evaluations</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularsecondSemEvaluations"
            value={formData.curricularsecondSemEvaluations}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular Second Sem Approved</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularsecondSemApproved"
            value={formData.curricularsecondSemApproved}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Curricular Second Sem Grade</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularsecondSemGrade"
            value={formData.curricularsecondSemGrade}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">
            Curricular Second Sem Without Evaluations
          </label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="curricularsecondSemWithoutEvaluations"
            value={formData.curricularsecondSemWithoutEvaluations}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Unemployment Rate</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="unemploymentrate"
            value={formData.unemploymentrate}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">Inflation Rate</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="inflationrate"
            value={formData.inflationrate}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}

        <div className="field-con2">
          <label className="label2">GDP</label>
          <div className="triangle-right2"></div>
          <input
            className="form_input2"
            type="number"
            name="gdp"
            value={formData.gdp}
            onChange={handleChange}
            title="Please enter only numbers"
            required
          ></input>
          <span className="errormsg"></span>
        </div>
        {/* ----------------------------input field------------------------- */}
       
        <button className="submitbtn2">Submit</button>
      </form>
      {prediction && <p className="output">Prediction: {prediction}</p>}
    </section>
  );
};
export default FormInputField;
