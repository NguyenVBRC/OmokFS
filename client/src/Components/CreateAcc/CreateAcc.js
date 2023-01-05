import React, { useState } from "react";
import "../SignIn.css"

export default function CreateAcc() {
  const [passCheck, setPassCheck] = useState("");
  const [newAccount, setNewAccount] = useState({
    username: "",
    password: "",
    confirmPass: ""
  });
  
  function accountInfo(e) {
    setNewAccount({
      ...newAccount,
      [e.target.id]: e.target.value,
    });
  }

  function sendLoginInfo() {
    fetch("http://localhost:8000/login", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newAccount),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newAccount.password !== newAccount.confirmPass) {
      setPassCheck("Passwords do not match.");
      console.log(newAccount);
    } else {
      setPassCheck("Success!")
      console.log(JSON.stringify(newAccount));
      sendLoginInfo() 
    }
  }
  
  return (
    <form
      className="log__container"
      style={{
        justifyContent: "space-evenly",
        width: "20rem",
        height: "20rem",
      }}
    >
      <input
        type="text"
        placeholder="Username"
        name="username"
        className="sign__in"
        onChange={(e) => accountInfo(e)}
        id="username"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="sign__in"
        onChange={(e) => accountInfo(e)}
        id="password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="password"
        className="sign__in"
        onChange={(e) => accountInfo(e)}
        id="confirmPass"
      />
      <p style={{ textAlign: "center", color: "red" }}>{passCheck}</p>
      <button 
        onClick={handleSubmit} 
        type="submit" 
        id="sign__in__btn"
      >
        Create Account
      </button>
    </form>
  );
}
