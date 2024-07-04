import React, { useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import "./navBar.css"
import SideBar from "./SideBar"
import { useParams  } from 'react-router-dom'
import "./navBar.css"; 

const NavBar = () => {
  const [users, setUsers] = useState([]);
  const {id}= useParams();
  return (
    <header>
      <section className="main-section">
            
       
        <div className="userItems">
        <a href="#" className='arrowLelf'>
          <i className="bi bi-arrow-left-right"></i>
        </a>
        <Link to="/info">
        <i className="bi bi-info"></i>
        </Link>
        <Link to="/library">
            <i className="bi bi-heart-fill"></i>
        </Link>
        <Link to="/bag">
            <i className="bi bi-cart3"></i>
        </Link>
          <div className="avatar">
            <div className="user">
              <span>
                UserName
              </span>
        <Link to={`/view/${users._id}`}>ViewProfile</Link>
            </div>
          </div>
        </div>
      </section>
     
      <SideBar/>
    
      
    </header>
  );
}

export default NavBar;

    