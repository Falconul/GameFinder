import React, { createContext, useState , useEffect } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addToLibrary = (game) => {
    console.log("context: addToLibrary:", game)
    setData([...data, game]); 
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Library")); 
    if (storedData) setData(storedData);
  }, []);

  console.log("context: Librarydata:", data)
  return (
    <LibraryContext.Provider value={{ data, addToLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
