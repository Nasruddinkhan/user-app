import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UserList = (props) => {
  return (
    <Card cssClassName={classes.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
