import useInput from "../../hook/use-input";
import Card from "../../UI/Card";
import classes from "./SimpleInput.module.css";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: hasErrorInFirstName,
    valueChangeHandler: onFirstNameChangeHandler,
    inputBlurHandler: onFirstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const fistNameInputClasses = hasErrorInFirstName
    ? "form-control invalid"
    : "form-control";
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: hasErrorInLastName,
    valueChangeHandler: onLastNameChangeHandler,
    inputBlurHandler: onLastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const lastNameInputClasses = hasErrorInLastName
    ? "form-control invalid"
    : "form-control";

    const {
      value: email,
      isValid: emailIsValid,
      hasError: hasErrorInEmail,
      valueChangeHandler: onEmailChangeHandler,
      inputBlurHandler: onEmailBlurHandler,
      reset: resetEmail,
    } = useInput((value) => value.includes('@'));

    
    const emailInputClasses = hasErrorInEmail
      ? "form-control invalid"
      : "form-control";

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  return (
    <Card cssClassName={classes.simpleform}>
      <form onSubmit={formSubmissionHandler}>
        <div className={fistNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={onFirstNameChangeHandler}
            onBlur={onFirstNameBlurHandler}
            value={firstName}
            type="text"
            id="name"
          />
          {hasErrorInFirstName && (
            <div className="error-text"> First Name cannot be Empty !</div>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lastName}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
            type="text"
            id="name"
          />
          {hasErrorInLastName && (
            <div className="error-text"> Last Name cannot be Empty !</div>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlurHandler}
            value={email}
          />
          {hasErrorInEmail && (
            <div className="error-text"> email cannot be Empty !</div>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default BasicForm;
