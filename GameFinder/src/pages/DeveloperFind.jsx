import React, { useEffect, useState } from 'react';

import "./developerFind.css";

function DeveloperFind() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/list/all");
        const data = await response.json();
        console.log("DeveloperFind: ", data);
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
    <div className='developerFind'>
      <h2>DeveloperFind</h2>
        <div className='usersCard'>
      <div className='gridUsers'>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user._id}>
         
          <div className='usersUserName'> 
          <div>
         <img src={user.image}  />
         </div>
         <h4 className='findUserName' >{user.username}</h4>
           
          <div className='findDeveloper' > 
           {user.developer}
           </div>
           <div className='findEmail'> 
          {user.email}
          </div>
           </div>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
      </div>
      </div>
    </div>
  );
}

export default DeveloperFind;
