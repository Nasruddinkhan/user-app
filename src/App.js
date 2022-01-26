import React, { Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout ";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AuthContext from "./hooks/auth-context";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Routes>
          <Route exact path="/" element={<Navigate to="/auth" />} />
          {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
          {authCtx.isLoggedIn && (
            <Route exact path="/quotes" element={<AllQuotes />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          )}
          {authCtx.isLoggedIn && (
            <Route exact path="/profile" element={<ProfilePage />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="/new-quote" element={<NewQuote />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
