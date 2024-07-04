import "./signUp.css"
import { Link ,useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import {UserContext} from "../contexts/UserContext"

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const {setUser}=useContext(UserContext);
  const handleLogin = async () => {
    console.log(emailOrUsername, password);

    const response = await axios.post("http://localhost:5000/users/login", {
      emailOrUsername,
      password,
    });
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      setUser(response.data.user);
      localStorage.setItem("socialUser", JSON.stringify(response.data.user));
      localStorage.setItem("socialToken", response.data.token);
      navigate("/");
    }
  };


  return (
    <div className="Sign-Up-Container">
      <div className="Sign-Up-Container-2">
      <h2>Login</h2>

        <div >
          <div className="w-3/4 mb-6">
          <label htmlFor='email'>
                <strong>Email & UserName</strong>
              </label>
            <input
              type="email"
              name="email"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              placeholder="Email or Username"
             
            />
          </div>

          <div className="w-3/4 mb-6">
          <label htmlFor='email'>
                <strong>Password</strong>
              </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
           
            />
          </div>

          <div className="w-3/4 mb-12">
            <button
              type="submit"
              onClick={handleLogin}
            >login
              
            </button>
            <p> If you don't have an account here : <Link to="/register">register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
