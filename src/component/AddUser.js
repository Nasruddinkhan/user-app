import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
import Wrapper from "../helper/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enterUserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("add user handler is calling");
    console.log(ageInputRef.current.value);
     console.log(nameInputRef.current.value);
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid field",
        message: "username & age field cannot be empty",
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
   // nameInputRef.current.value=''//;
  };

  const usernameChangeHandler = (event) => {
    setEnterUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const closeErrorModelHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title="An error occur"
          message="Something went wrong"
          onCloseErrorModal={closeErrorModelHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            value={enterUserName}
            id="username"
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
