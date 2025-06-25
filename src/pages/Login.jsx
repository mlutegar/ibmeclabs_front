import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Base from "./Base";
import LoginPage from "../components/LoginPage/LoginPage";

const Login = () => {
    return (
    <Base>
      <LoginPage/>
    </Base>
  )
}

export default Login;