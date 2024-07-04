import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom'; // React Router'dan Link bileşenini içe aktarın

function SideMenu() {
  return (
    
    <div className="sideMenu ">
        
      <Link to="/" className="logo">
        <i className="bi bi-code-slash"></i>
        <span style={{ color: "#009F9D" }} className='brand '>GD
          <span style={{ color: "white" }} >/</span> 
          <span style={{ color: "yellow" }} >Finder</span> 
        </span>
      </Link>
      
        <div className=''> 
      <ul className='sideBarMenu'>
        <Link to="/"><i className="bi bi-house"></i>Home</Link>
        <Link to="/categories"><i className="bi bi-window-stack"></i>Categories</Link>
        <Link to="/library"><i className="bi bi-heart"></i>Library</Link>
        <Link to="/bag"><i className="bi bi-bag"></i>My Bag</Link>
        <Link to="/developerFind"><i className="bi bi-binoculars"></i>Developers</Link>
        <Link to="/addGame"><i className="bi bi-plus-circle-dotted"></i>Add game</Link>
        <Link to="/login"><i className="bi bi-box-arrow-in-right"></i>Login</Link>
        <Link to="/register"><i className="bi bi-person-plus"></i>Register</Link>
      </ul>
        </div>
    </div>
  );
}

export default SideMenu;
