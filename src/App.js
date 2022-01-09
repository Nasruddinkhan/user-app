import "./App.css";
import AddUser from "./component/AddUser";
import UserList from "./component/UserList";
import React, { useEffect, useState } from "react";
import ForwordCounter from "./component/ForwordCounter";
import BackwordCounter from "./component/BackwordCounter";

import Tasks from "./component/Tasks/Tasks";
import NewTask from "./component/TaskForm/NewTask";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  const addItemHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-af29c-default-rtdb.firebaseio.com/tasks.json"
      );
      setIsLoading(true);
      setError(null);
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    console.log("FETCH GET DATA");
    fetchTasks();
  }, []);
  return (
    <div className="App">
      <NewTask addTask={addItemHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
      <ForwordCounter />
      <BackwordCounter />
    </div>
  );
};

export default App;
