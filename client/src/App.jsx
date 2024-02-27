import { useState } from 'react'
// import {Routes, Route, Navigate} from "react-router-dom";
// import {AuthComponent, rooms_component} from "./components";
import {AuthComponent} from "./components/AuthComponent";
import './App.css'

function App() {
  
  const [sessionToken, setSessionToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (state, value) => {
    switch(state){
      case "first":
        setFirstName(value);
        break;
      case "last":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
        default:
          console.log("something went wrong");
    }
}

const handleSignup = async() => {
try{
  setError("");
  const response = await(await fetch("http://localhost:7000/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }),
  })
).json()
console.log(response);
if (response.Error) {
  setError("try again");

}
}catch(err){
  console.log(err)
}
}

  return (
    <>
{/*     
    {firstName}
    {lastName}
    {email}
    {password}
    {!sessionToken ?

      <Signup handleChange={handleChange} handleSignup={handleSignup}/>
      :
      <>
      <button>Logout</button>
      <p>[Products]</p>
      </>
    }
     */}
     {error}
     something, anything
     <AuthComponent handleChange={handleChange} handleSignup={handleSignup} />
    </>
  )
}

export default App
