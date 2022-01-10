import { useEffect, useRef, useState } from "react";
import Card from "../../UI/Card";
import classes from "./SimpleInput.module.css";

const SimpleInput = () => {
  const nameInputRef = useRef();
  const [enterName, setEnterName] = useState("");
  const [enterNameIsValid, setEnterNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  useEffect(() => {
    if (enterNameIsValid) console.log("Name input is valid");
  }, [enterNameIsValid]);
  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enterName.trim() === "") {
      setEnterNameIsValid(false);
      return;
    }
    setEnterNameIsValid(true);
    const enterValue = nameInputRef.current.value;
    console.log(enterValue);
    setEnterName("");
  };
    const nameInputIsInvalid = !enterNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <Card cssClassName={classes.simpleform}>
      <form onSubmit={onSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={nameInputRef}
            value={enterName}
            onChange={nameInputChangeHandler}
            id="name"
          />
          {nameInputIsInvalid && (
            <p className="error-text"> Enter the name cannot be empty!</p>
          )}
        </div>

        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};
export default SimpleInput;
