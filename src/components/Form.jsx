import React, { useState } from "react";
import "./Admission";
import Admission from "./Admission";
import SignupSuccessfully from "./SignupSuccessfully";
const Form = () => {
  const [formIsSubmitted, setformIsSubmitted] = useState(false);
  const submitForm = () => {
    setformIsSubmitted(true);
  };
  
  return (
    <div>
      {!formIsSubmitted ? (
        <Admission submitForm={submitForm} />
      ) : (
        <SignupSuccessfully />
      )}
    </div>
  );
};
export default Form;
