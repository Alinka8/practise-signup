import "./signupForm.style.css";
import React, { useState } from "react";

function SignupForm() {
  const defaultValue = {
    fullName: "",
    dateofBirth: "",
    password: "",
    confirmPassword: "",
  };

  const [value, setValue] = useState(defaultValue);
  const [isClicked, setisClicked] = useState(false);

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setisClicked(true);
  };

  return (
    <>
      <form className="form-container" onSubmit={onSubmitHandler}>
        <h1>Signup Form</h1>
        <label forHtml="FirstName">Full Name</label>
        <input
          type="text"
          value={value.fullName}
          name="fullName"
          placeholder="Full Name"
          onChange={onChangeHandler}
          required
        />
        <label forHtml="FirstName">Date of birth</label>
        <input
          type="date"
          value={value.dateofBirth}
          name="dateofBirth"
          placeholder="Date of birth"
          onChange={onChangeHandler}
          required
        />
        <label forHtml="FirstName">Password</label>
        <input
          type="password"
          value={value.password}
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />
        <label forHtml="FirstName">Confirm Password</label>
        <input
          type="password"
          value={value.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Submit</button>
        {isClicked === true && <p>Name: {value.fullName} </p>}
        {isClicked === true && <p>Date of Birth: {value.dateofBirth} </p>}
        {isClicked === true && <p>Password: {value.password} </p>}
        {isClicked === true && (
          <p>Confirm password: {value.confirmPassword} </p>
        )}
      </form>
    </>
  );
}

export default SignupForm;
