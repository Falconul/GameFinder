import React from 'react'

import { useContext } from 'react';
import "./library.css"
import { LibraryContext } from '../contexts/LibraryContext';

function Library() {
  const { data } = useContext(LibraryContext);
  console.log("Library page",data)
  return (
    <div id='library' className='library'>
      <h1>Library</h1>
   
      <div className='libraryCard'>
      <div className='gridGame'>
        {data.map((item, idx) => 
        <div key={item._id}>
           <div className='dataAll'>
          <div >
            <img src={item.image}/> 
            </div>
            <div className='gameFeature1'>
            <div className='platform'>{item.platform}</div>
            <div className='title'>{item.title}</div>
            </div>
            <div className='gameFeature2'>
            <div className='genre'>{item.gameGenre}</div>
            <div className='releaseYear' >{item.releaseYear}
            </div>
            </div>
            </div>
              </div>
          )
        }    
           </div>
           </div>
      </div>
   
  );
}


export default Library