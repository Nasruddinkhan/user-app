import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("add user handler is calling");
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid field",
        message: "username & age field cannot be empty"
      });
      return;
    }
    if (+enterAge < 1) {
      return;
    }
    console.log(enterUserName, enterAge);
    props.onAddUser(enterUserName, enterAge);
    setEnterUserName("");
    setEnterAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const closeErrorModelHandler = ()=>{
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title="An error occur"
          message="Something went wrong"
          onCloseErrorModal={closeErrorModelHandler}
        />
      )}
      <Card cssClassName={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            value={enterUserName}
            id="username"
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
            id="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
