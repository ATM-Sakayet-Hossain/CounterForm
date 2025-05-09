import React, { useState } from "react";

const Form = () => {
  let [fullName, setFullName] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [password, setPassword] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!fullName) {
      setFullNameErr("type your name");
    } else if (!email) {
      setEmailErr("Type your mail");
    } else if(!password){
      setPasswordErr("Type your Password");
    }else {
      console.log("Submited");
    }
  };
  return (
    <form onSubmit={handelSubmit} action="">
      {fullNameErr && <p className="flex justify-center">{fullNameErr}</p>}
      <input
        onChange={(e) => {setFullName(e.target.value), setFullNameErr("")}}
        className="border pl-5 h-8 rounded-2xl uppercase"
        type="text"
        placeholder="Type Your Name"
        />
        {emailErr && <p className="flex justify-center">{emailErr}</p>}
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border pl-5 h-8 rounded-2xl"
        type="email"
        placeholder="Type Your Email"
        />
        {passwordErr && <p className="flex justify-center">{passwordErr}</p>}
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border pl-5 h-8 rounded-2xl"
        type="password"
        placeholder="Type Your Password"
      />
      <button className="border pl-5 h-8 rounded-2xl" type="Submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
