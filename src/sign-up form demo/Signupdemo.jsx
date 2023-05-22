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
  const [clicked, setisClicked] = useState(false);

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
        <h1>Sign up form</h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={value.fullName}
          name="fullName"
          placeholder="Full Name"
          onChange={onChangeHandler}
          required
        />

        <label htmlFor="name">Date of birth</label>
        <input
          type="date"
          value={value.dateofBirth}
          name="dateofBirth"
          placeholder="Date of birth"
          onChange={onChangeHandler}
          required
        />

        <label htmlFor="name">Password</label>
        <input
          type="password"
          value={value.password}
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />

        <label htmlFor="name">Confirm password</label>
        <input
          type="password"
          value={value.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Submit</button>
        {clicked === true && <p>Name: {value.fullName}</p>}
        {clicked === true && <p>Date of Birth: {value.dateofBirth}</p>}
        {clicked === true && <p>Password: {value.password}</p>}
        {clicked === true && <p>Confirm password: {value.confirmPassword}</p>}
      </form>
    </>
  );
}

export default Signupdemo;
