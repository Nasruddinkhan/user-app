import React, { useState, useEffect } from "react";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import MainHeader from "./component/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

const App=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
    const storeLoginUser = localStorage.getItem("isLoggedIn");
    if (storeLoginUser === "IS_LOG_IN") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "IS_LOG_IN");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
