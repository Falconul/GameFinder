import React, { useState, useEffect } from 'react';
import "./categories.css"
import GamePosts from '../components/GamePosts';

function Categories() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/posts/get/all");
      const data = await response.json();

      if (data.success) {
        setPosts([...data.posts]);
        setFilteredPosts([...data.posts]); 
      }
    };

    fetchData();
  }, []);

  const handleFilter = (genre) => {
    if (genre === "All") {
      setFilteredPosts([...posts]); 
    } else {
      const filtered = posts.filter(post => post.gameGenre === genre); 
      setFilteredPosts([...filtered]);
    }
  };

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filtered = posts.filter(post => post.title.toLowerCase().includes(searchText)); 
    setFilteredPosts([...filtered]);
  };

  return (
    <div className='line'>
      <h1>Categories</h1>
      <div className='Categories-container'>
        <div className='Categories-container-2'> 
          <button onClick={() => handleFilter("All")}>All</button>
          <button onClick={() => handleFilter("Action")}>Action</button>
          <button onClick={() => handleFilter("MOBA")}>MOBA</button>
          <button onClick={() => handleFilter("MMORPG")}>MMO</button>
          <button onClick={() => handleFilter("RPG")}>RPG</button>
          <button onClick={() => handleFilter("Strategy")}>Strategy</button>
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
      </div>
      <div className='Grid-Game-Card'>
        {filteredPosts.map((item) => (
          <GamePosts key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
