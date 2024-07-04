import React, {useState ,useEffect ,useRef ,useContext} from 'react';
import Carousel from "../components/Carousel"

function Home() {
  
  const [games , setGames] = useState([]);
  const fetchData=()=>{
    fetch('http://localhost:5173/api/gamesData.json')
    .then(res=>res.json())
    .then(data =>(
      setGames(data),
      console.log(data)
    ))
    .catch(e=>console.log(e.message))
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className='div container-fluid'>
      <div className='row'>
       <Carousel games={games}/>
      </div>
    
    </div>
  )
}

export default Home