import { Close, Google, Lock } from "@mui/icons-material";
import { useRef, useState } from "react";
import "./login.css";

function Login() {
  const ref = useRef();
  const hideLogin = () =>{
    ref.current.parentElement.style.display = 'none'
  }
  return (
    <div ref={ref} className="login">
      <form className="loginForm">
        <div className="top">
            <div className="left">
                <h3>Login</h3>
                <span><Lock className="lockIcon"/> Your information is safe with us</span>
            </div>
            <div className="right"><Close onClick={hideLogin} className="close"/></div>
        </div>
        <hr />
        <div className="inputs">
            <select>
                <option value="+91">+91</option>
                <option value="+93">+93</option>
                <option value="+95">+95</option>
                <option value="+90">+90</option>
            </select>
            <input type="number" placeholder="Type phone number" />
        </div>
        <p className="info2">Continue, if you agree to the <span>T&C</span> and <span>Privacy Policy</span></p>
        <button type="submit">Continue</button>
        <p className="or">OR</p>
        <div className="other"><img src="https://kukufm.com/logogoogle.png" alt="" /> Continue via Google</div>
      </form>
    </div>
  )
}

export default Login
