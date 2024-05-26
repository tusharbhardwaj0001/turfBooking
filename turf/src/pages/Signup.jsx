import React, { useState } from "react";
import loginBg from "../images/loginBg.png";
import { Button, Input } from "@chakra-ui/react";
import { Link ,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/Authcontext";
import { Alert } from "@chakra-ui/react";
import { userSignUp } from '../Helpers/userHelper.js'


export const Signup = () => {
    const [email,setEmail] = useState("");
    const [username,setUserName] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [pass,setPass] = useState("")
    const [error,setError] = useState("")
    const {signup} = useUserAuth()
    const navigate = useNavigate()
    const handlesignup = async() => {
        setError("")
        try{
          // await signup(email,pass)
          const res = await userSignUp(email, pass, username, phoneNo)
          alert("User Created Successfully")
          navigate("/login")
        }catch(err){
          setError(err.message)
        } 
      }

  return (
    <div id="loginContainer">
      <div id="loginBg">
        <img src={loginBg} alt="" />
      </div>
      <div id="loginform">
        <h1 id="headingLogin">SIGNUP</h1>
        {
            error && <Alert variant={"subtle"} status='error'>{error}</Alert>
        }
        <div>
          <p id="username">USERNAME</p>
          <Input
            type="text"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            border="2px solid black"
          />
        </div>
        <div>
          <p id="email">EMAIL</p>
          <Input
            type="text"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            border="2px solid black"
          />
        </div>
        <div>
          <p id="phoneNo">PHONE NUMBER</p>
          <Input
            type="text"
            placeholder="PHONE NUMBER"
            onChange={(e) => setPhoneNo(e.target.value)}
            border="2px solid black"
          />
        </div>
        <div>
          <p id="password">PASSWORD</p>
          <Input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => setPass(e.target.value)}
            border="2px solid black"
          />
        </div>
        <Button id="loginFormBtn" onClick={handlesignup}>
          SIGN UP
        </Button>
        <p>Already have an account? <Link to={"/login"}>Log In</Link></p>
      </div>
    </div>
  );
};
