import React, { useState } from "react";

// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {

  return (
    <>
      <form className="from-con">
       
         {/* ----------------------------input field------------------------- */}
        <div className="field-con">
          <label className="label">label</label>
          <div class="triangle-right"></div>
          <input
            className="form_input"
          ></input>
          <span className="errormsg"></span>
        </div>
         {/* ----------------------------input field------------------------- */}
        <div className="field-con">
          <label className="label">label</label>
          <div class="triangle-right"></div>
          <input
            className="form_input"
          ></input>
          <span className="errormsg"></span>
        </div>
         {/* ----------------------------input field------------------------- */}
        <div className="field-con">
          <label className="label">label</label>
          <div class="triangle-right"></div>
          <input
            className="form_input"
          ></input>
          <span className="errormsg"></span>
        </div>
        <button className="submitbtn">Submit</button>
      </form>
    </>
  );
};
export default Form;
