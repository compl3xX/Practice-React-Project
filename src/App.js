import React, { useState } from 'react';

import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
  const [userData, setUserData] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUserData(prevUserList => {
      return [...prevUserList, { id: Math.random(), name: uName, age: uAge }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
