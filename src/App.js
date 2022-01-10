import "./App.css";
import AddUser from "./component/AddUser";
import UserList from "./component/UserList";
import React, { useEffect, useState } from "react";
import ForwordCounter from "./component/ForwordCounter";
import BackwordCounter from "./component/BackwordCounter";

import Tasks from "./component/Tasks/Tasks";
import NewTask from "./component/TaskForm/NewTask";
import useHttp from "./hook/use-http";
import SimpleInput from "./component/formValidation/SimpleInput";

const App = () => {
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  const [userList, setUserList] = useState([]);
  const [tasks, setTasks] = useState([]);
 
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  
    useEffect(() => {
      const transformTasks = (tasksObj) => {
        const loadedTasks = [];

        for (const taskKey in tasksObj) {
          loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
        }

        setTasks(loadedTasks);
      };
      fetchTasks(
        {
          url: "https://react-http-af29c-default-rtdb.firebaseio.com/tasks.json",
        },
        transformTasks
      );
    }, [fetchTasks]);

  const addItemHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <div className="App">
      <SimpleInput/>
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
