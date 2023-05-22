import React, { useState } from "react";
import "./signupdemo.style.css";

function Signupdemo() {
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
        <h1>Sign up Form</h1>
        <label htmlFor="Full name">Full Name</label>
        <input
          type="text"
          value={value.fullName}
          name="fullName"
          placeholder="Full name"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="Date of birth">Date of Birth</label>
        <input
          type="date"
          value={value.dateofBirth}
          name="dateofBirth"
          placeholder="Date of birth"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={value.password}
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="confirm password">Confirm Password</label>
        <input
          type="password"
          value={value.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Submit</button>
        {isClicked === true && <p>Name: {value.fullName}</p>}
        {isClicked === true && <p>Date of Birth: {value.dateofBirth}</p>}
        {isClicked === true && <p>Password: {value.password}</p>}
        {isClicked === true && <p>Confirm Password: {value.confirmPassword}</p>}
      </form>
    </>
  );
}

export default Signupdemo;
