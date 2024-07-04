import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState({
    title: "",
    platform: "",
    gameGenre: "",
    releaseYear: "",
    gameImage: "",
  });

  useEffect(() => {
    const storedPost = JSON.parse(localStorage.getItem("Post"));
    if (storedPost) setPost(storedPost);
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};
