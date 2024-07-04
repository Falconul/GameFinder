import React from 'react';
import "./gameCard.css"
import { useEffect, useState } from "react";
import GamePosts from './GamePosts';
import CarouselPosts from './CarouselPosts';

function GameCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/posts/get/all");

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      if (data.success) setPosts([...data.posts]);
    };

    fetchData();
  }, []);

  return (
    <div className='Grid-Game-Card'>
      {posts.map((item) => (
        <GamePosts key={item._id} data={item} />
      ))}
      <div>
     
      </div>
    </div>
  );

}

export default GameCard;
