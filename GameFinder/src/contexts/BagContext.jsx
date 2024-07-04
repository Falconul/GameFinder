import React, { createContext, useState , useEffect } from 'react';

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addToBag = (game) => {
    console.log("context: addToBag:", game)
    setData([...data, game]); 
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Bag")); 
    if (storedData) setData(storedData);
  }, []);

  console.log("context: data:", data)
  return (
    <BagContext.Provider value={{ data, addToBag }}>
      {children}
    </BagContext.Provider>
  );
};
