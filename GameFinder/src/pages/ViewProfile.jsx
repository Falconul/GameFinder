import { useParams  } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { UserContext } from '../contexts/UserContext';
import "./viewProfile.css"
function ViewProfile() {
  const {user,setUser}=useContext(UserContext);
  const [users, setUsers] = useState([]);
  const {id}= useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/list/one?id="+user._id);
        const data = await response.json();
        console.log("ViewProfile:", data);
        if (data.success) {
          setUsers(data.users);
        } else {
          console.error("Error fetching users:", data.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='viewProfile'>
        
      <h2>Profile</h2>
        <div className='usersCard'>
      <div className='gridUsers'>
      
   
          <div key={user._id}>
           
          <div className='usersUserName'> 
          <div className='viewImage'>
         <img src={user.image}  />
        </div>
        <div className='viewText'>

      
          <h4 className='viewUserName'>USERNAME: {user.username}</h4> 
          <div className='viewDeveloper'> 
            <h4>{"Company Name: " + user.developer}</h4>
           
           </div>
           <div className='viewEmail'> 
           <h4>E-Mail: {user.email}</h4>
          </div>
           </div>
          </div>
          </div>
    
      </div>
      </div>
    </div>
  
  )
}

export default ViewProfile