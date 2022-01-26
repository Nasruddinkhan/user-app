import { Fragment, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../hooks/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    console.log(authCtx.token);
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAPzNe7eWfEsZSRFfNJoiSE1ddNlB4j6OY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
        setIsLoading(false);
      console.log(res.ok);
      navigate("/quotes");
    });
  };
  return (
    <Fragment>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            minLength="7"
            ref={newPasswordInputRef}
          />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
    </Fragment>
  );
};
export default ProfileForm;
