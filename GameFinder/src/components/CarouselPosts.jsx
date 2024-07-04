import React, { useRef, useState } from 'react';



function CarouselPosts({
  data = {
    gameImage:"",
  },
}) {
  return (
    <div className='cardMain'>
      <div className="gameCard">
        <div>
          {data.gameImage && (
            <img
              src={data.gameImage}
              className="w-[250px] h-[250px] object-cover"
            />
          )}
        </div>

     
      </div>
    </div>
  )
}

export default CarouselPosts;
