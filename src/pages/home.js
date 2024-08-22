import React from "react";
import "../css/home.css";
import Form from "../components/form";
import FormInputField from "../components/formInputField";

const Home = () => {
  return (
    <div className="home">
      <h1>Academic Success</h1>
      <Form />
      <FormInputField />
    </div>
  );
};

export default Home;
