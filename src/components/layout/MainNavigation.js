import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const navigation =  useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  console.log("isLoggedIn", isLoggedIn);
  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
    navigation("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>

      <nav className={classes.nav}>
        <ul>
          {isLoggedIn && (
            <li>
              <NavLink to="/quotes" className={classes.active}>
                All Quotes
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/new-quote" className={classes.active}>
                Add a Quote
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/profile" className={classes.active}>
                Profile
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
