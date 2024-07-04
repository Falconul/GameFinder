import { useParams  } from 'react-router-dom'
import "./seeMore.css"
import React, { useState, useEffect} from "react";
import axios from "axios";

function SeeMore() {
  const {id}= useParams();
  const [post , setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch ("http://localhost:5000/posts/get/one?id="+id);

      const data = await response.json();
      console.log("seemore data:",data)
      
     if (data. success) setPost(data.post)

    };
  fetchData();
  },[])
  return (
    <div>
       <div className='seeMore1'>    
       <div className='cardMain'>
    <div className="seeCard">
      <div>
    {post.image && (
        <img
        src={post.image}

      />
      )} 
   </div>
 
    
    <div className='gameFeature'>
      
      <div className='gamePlatform'>{post.platform}</div>
    <div className='gameTitle '>{post.title}</div>
    </div>
    <div className='gameFeature'>
    <p className="gameGerne">Genre : {post.gameGenre}</p>
    <p className='gameYear'>Release Year : {post.releaseYear}</p>
    </div>
    <p className='description'><h4>Description:</h4>{post.description}</p>
  

    </div>
    </div>

    </div>
    </div>
  )
}

export default SeeMore