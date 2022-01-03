import logo from "./logo.svg";
import "./App.css";
import AddUser from "./component/AddUser";
import UserList from "./component/UserList";
import React, { useState } from "react";
const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList)=>{
        return [...prevUserList, {name: uName, age : uAge}];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
