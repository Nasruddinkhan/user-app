import { useState } from 'react';
import Card from "../../UI/Card";
import classes from "./SimpleInput.module.css";

const SimpleInput = () => {
  

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

   const [enteredEmail, setEnteredEmail] = useState("");
   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

   const enteredEmailIsValid = enteredEmail.includes('@');
   const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  
  
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

      const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control";

  return (
    <Card cssClassName={classes.simpleform}>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="name"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Email must not be empty.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Card>
  );
};
export default SimpleInput;
