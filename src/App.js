import './App.css';
import React, { useEffect, useState } from 'react';
import User from './UserList';
import axios from 'axios';

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
       setUser([...data.user])
      });
  });

  return (
    <div className="App">
       {user.map((user,index)=><User key={index} name={user.name} username={user.username} email={user.email} address={user.address}/>)}
    </div>
     );
}
export default App;
