import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import TrackerForm from "./Components/TrackerForm/TrackerForm";
import Login from "./Components/Login/LoginForm";
import Registration from "./Components/Register/RegistrationForm";
import Tracker from "./Components/Tracker/Tracker";
import Tutorial from "./Components/Tutorial/Tutorial";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
      <main className="App">
        <Route exact path="/" component={Tutorial} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-tracker" component={TrackerForm} />
        <Route path="/tracker" component={Tracker} />
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
