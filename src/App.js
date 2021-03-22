import { useEffect, useState } from "react";
import { auth } from "./lib/firebase";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { Route, Redirect } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <>
      <Route exact path="/">
        {user !== null ? <Redirect to="/dashboard" /> : <LandingPage />}
      </Route>
      <Route path="/sign-in">
        {user !== null ? <Redirect to="/dashboard" /> : <SignIn user={user} />}
      </Route>
      <Route path="/dashboard">
        {user !== null ? <Dashboard user={user} /> : <Redirect to="/sign-in" />}
      </Route>
    </>
  );
};

export default App;
