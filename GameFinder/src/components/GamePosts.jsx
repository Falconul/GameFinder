import React, {useState,useEffect, useContext}from 'react';
import "./gameCard.css"
import { Link } from 'react-router-dom';
import { BagContext } from '../contexts/BagContext';
import { LibraryContext } from '../contexts/LibraryContext';

function GamePosts({ data}) {

   const { addToBag } = useContext(BagContext);
   const handleClick = () => {
    addToBag(data);
    console.log("HandleClick AddtoBag", data)
  };
  const {addToLibrary}= useContext (LibraryContext);
  const handleLibrary = () => {
    addToLibrary(data);
    console.log("HandleClick addToLibrary", data)
  };
  return (
    <div className='cardMain'>
    <div className="gameCard">
      <div>
    {data.image && (
        <img
        src={data.image}
        className="w-[250px] h-[250px] object-cover"
      />
      )} 
   </div>
    <a className='like' >
      <i className='bi bi-heart-fill' onClick={handleLibrary}></i>
    </a>
    
    <div className='gameFeature'>
      
      <div className='gamePlatform'>{data.platform}</div>
    <div className='gameTitle '>{data.title}</div>
    </div>
    <div className='gameFeature'>
    <p className="gameGerne">{data.gameGenre}</p>
    <p className='gameYear'>{data.releaseYear}</p>
    </div>

    <div className='SeeMore'>
    <Link to= {`/game/${data._id}`} ><i className='bi bi-eye-fill'></i></Link>
    </div>
    <a className='addBag' onClick={handleClick}> 
          <i className='bi bi-bag-plus-fill'></i>
        </a>
    </div>
    </div>



  );

}

export default GamePosts;
