
import React from 'react'
import "./signUp.css"
import { useState } from 'react'
import axios from 'axios';
import { Link ,useNavigate } from 'react-router-dom';

function DeveloperSign() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [developer, setDeveloper] = useState("");
  const [imagePath, setImagePath] = useState("/noimg.png");
  const [image, setImage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("username",username);
    formdata.append("email",email);
    formdata.append("developer",developer)
    formdata.append("password",password);
    formdata.append("image",image);
    
    console.log(username, email, password);

    const response = await axios.post(

    import.meta.env.VITE_BASE_URL+"/users/register",
    formdata

    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      alert("Register successfully");
      navigate("/login");
    }
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImagePath(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="Sign-Up-Container ">
    <div className="Sign-Up-Container-2">
      <div className="text-slate-100 items-center">
      
      <h2>Developer Register</h2>
      </div>

      <div>
        <div className="w-3/4 mb-6">
        <label htmlFor='email'>
                <strong>Email</strong>
              </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
           
          />
        </div>

        <div className="w-3/4 mb-6">
        <label htmlFor='email'>
                <strong>Name</strong>
              </label>
          <input
            type="text"
            name="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
           
          />
        </div>
        <div className="w-3/4 mb-6">
        <label htmlFor='email'>
                <strong>Company - Name</strong>
              </label>
             
          <input
            type="text"
            name="user"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            placeholder="Developer-Name"
           
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
        <div >
        <label  >
          Select Image
          <input type="file" name="image" hidden onChange={handleImageChange} />
        </label>
        <img src={imagePath} className="addImage" />
        </div>
        <div className="w-3/4 mb-12">
          <button
            type="submit"
         
            onClick={handleRegister}
          >
            REGISTER
          </button>
              <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  </div>
  )
}
    
  


export default DeveloperSign