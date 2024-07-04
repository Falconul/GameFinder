import React from 'react'
import "./myBag.css"
import { useContext } from 'react';
import { BagContext } from '../contexts/BagContext';
function MyBag() {
  const { data } = useContext(BagContext);
  console.log("MyBag page",data)
  return (
    
    <div id='myBag' className='myBag'>
    <h1>MYBAG</h1>
 
    
   
    <div className='myBagCard'>
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
  )
}

export default MyBag