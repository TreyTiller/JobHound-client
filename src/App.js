import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import TrackerForm from "./Components/TrackerForm/TrackerForm";
import LoginPage from './Routes/LoginPage/LoginPage';
import Tracker from "./Components/Tracker/Tracker";
import Tutorial from "./Components/Tutorial/Tutorial";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'
import RegistrationPage from "./Routes/RegistrationPage/RegistrationPage";
import UpdateTracker from "./Components/Tracker/UpdateTracker";

function App() {
  return (
    <div>
    <BrowserRouter>
      <main className="App">
        <Route exact path="/" component={Tutorial} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-tracker" component={TrackerForm} />
        <Route path="/tracker/:listing_id" component={Tracker} />
        <Route path="/update/:listing_id" component={UpdateTracker} />
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
