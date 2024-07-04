import React, { useState  } from 'react';
import {useNavigate } from 'react-router-dom';
import "./addGames.css"
import axios from 'axios';
function AddGames() {
  const [title,setTitle]= useState("");
  const [platform,setPlatform]= useState("");
  const [gameGenre,setGenre]= useState("");
  const [releaseYear,setReleaseYear]= useState("");
  const [description,setDescription]=useState("")
  const navigate = useNavigate();
  const [imagePath, setImagePath] = useState("/noimg.png");
  const [image, setImage] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formdata = new FormData();
  
    formdata.append("title", title);
    formdata.append("platform", platform);
    formdata.append("gameGenre", gameGenre);
    formdata.append("releaseYear", releaseYear);
    formdata.append("description", description);
    formdata.append("postImage", image);

  
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/posts/add",
      formdata
    );
  
    console.log("🚀 ~ response:", response);
  
    if (response.data.success) {
      alert("Post added successfully");
      navigate("/");
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImagePath(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <div className="form-container">
      <h2>Add Game</h2>
     
      <div className="form-content"> 
        <form  className="form">
          <div className="input-group">
            <label>Title:</label>
            <input type="text" name="title" value={title} 
            onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Platform:</label>
            <input type="text" name="platform" value={platform} 
            onChange={e => setPlatform(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Genre:</label>
            <input type="text" name="genre" value={gameGenre} 
            onChange={e => setGenre(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Release Year:</label>
            <input type="text" name="releaseYear" value={releaseYear} 
            onChange={e => setReleaseYear(e.target.value)} />
          </div>
          <div className='seeMoreContainer'>
      <label>Description</label>
      <textarea 
        type="text"
        name="description" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
      />
    </div>
          <div >
        <label  >
          Select Image
          <input type="file" name="image" hidden onChange={handleImageChange} />
        </label>
        <img src={imagePath} className="addImage" />
        </div>
          <button  type="submit" onClick={handleSubmit}>Add Game</button>
        </form>
      </div>
    </div>
  );
}

export default AddGames;
