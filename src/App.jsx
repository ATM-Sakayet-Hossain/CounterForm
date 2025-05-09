import { useState } from "react";
import "./App.css";
import Form from "./home/form"

function App() {
  // let [fullname, setfullName] = useState("");
  // let [fullnameErr, setfullNameErr] = useState("");
  // let [email, setemail] = useState("");
  // let [emailErr, setemailErr] = useState("");
  // let [password, setpassword] = useState("");
  // let [passwordErr, setpasswordErr] = useState("");

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   if (!fullname) {
  //     setfullNameErr("Name is Required!");
  //   } else if (!email) {
  //     setemailErr("Email is required!");
  //   } else if (!password) {
  //     setpasswordErr("Password is required!");
  //   } else {
  //     alert("Submited!");
  //   }
  // };

  return (
    <>
      <Form/>
      {/* <form onSubmit={handelSubmit} action="">
        <h1 className="text-6xl font-sans font-semibold gap-4 text-center">Form Validation</h1>
        <input
          onChange={(e) => {
            setfullName(e.target.value), setfullNameErr("");
          }}
          className="border rounded-2xl"
          type="text"
          placeholder="Full Name"
        />
        {fullnameErr && <p>{fullnameErr}</p>}
        <input
          onChange={(e) => {
            setemail(e.target.value), setemailErr("");
          }}
          className="border rounded-2xl"
          type="email"
          placeholder="Type Your Mail"
        />
        {emailErr && <p>{emailErr}</p>}
        <input
          onChange={(e) => {
            setpassword(e.target.value), setpasswordErr("");
          }}
          className="border rounded-2xl"
          type="password"
          placeholder="Type your Password"
        />
        {passwordErr && <p>{passwordErr}</p>}
        <button className="border rounded-2xl" type="Submit">
          {" "}
          Submit
        </button>
      </form> */}
    </>
  );
}

export default App;
