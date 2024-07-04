import React, { useState ,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,FreeMode, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./carousel.css"
import GameCard from '../components/GameCard';
import CarouselPosts from './CarouselPosts';
function Carousel({games}) {
  const ratedGames = games.slice().sort((a, b) => b.rating - a.rating);
  const parseDate = (dateString) => {
    const parts = dateString.split('.');
    return new Date(parts[2], parts[1] - 1, parts[0]); 
  };
  const dateDiffInDays = (date1, date2) => {
    const diffInMs = new Date(date1) - new Date(date2);
    return Math.abs(Math.round(diffInMs / (1000 * 60 * 60 * 24)));
  };
  const sortedGames = games.sort((game1, game2) => {
    const today = new Date();
    const diff1 = dateDiffInDays(parseDate(game1.date), today);
    const diff2 = dateDiffInDays(parseDate(game2.date), today);
    return diff1 - diff2;
  });
  return (
    <div className='main-section-2'>
    {/* recent games */}
    <h3 className='titleSwiper'>latest games</h3>
  <Swiper
    slidesPerView={1}
   
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="gameSwiper"
  >
    
    {sortedGames.slice(0, 7).map((game) => (
      <SwiperSlide key={game._id}>
        <div className="gameSlider">
          <img src={game.img} alt="Game Image" style={{height:'100%', width:'100%'}} />
          <div className={`video `}>
            <iframe
              width="1179"
              height="480"
              src={game.trailer}
              title={game.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <div className="buttons">
              <a href="#" className="orderBtn">
                {game.date}
              </a>
            
               
              <a href="#" className="orderBtn">
                See more
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

{/* famous games */}
  <h3 className='titleSwiper'>famous games</h3>
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="gameSwiper"
  >
    {ratedGames.slice(0,7).map(game => (
      <SwiperSlide key={game._id}>
        <div className="gameSlider">
          <img src={game.img} alt="Game Image" style={{height:'100%', width:'100%'}} />
          <div className={`video `}>
            <iframe
              width="1179"
              height="480"
              src={game.trailer}
              title={game.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <div className="buttons">
              <a href="#" className="orderBtn">
              {game.rating}
              </a>
           
   
              <a href="#" className="orderBtn">
                See more
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className='row mb-4 mt-4'>
    <div className='col-lg-6'>
      <h1 className='section-title'>Games
      
      </h1>
    </div>


  <div className='col-lg-6 d-flex align-items-center justify-content-end'>
    <a href='/categories' className='viewMore'>View More Games <i className='bi bi-arrow-right'></i></a>
  </div>
</div>


          <GameCard />
    </div>
 
  ) 
}

export default Carousel