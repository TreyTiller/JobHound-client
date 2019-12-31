import React from "react";
import "./Tutorial.css";
import { Link } from "react-router-dom";

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Job Hound Coming Soon</h1>
        <h3>
          This will be the landing page and will display a quick introduction of
          the app
        </h3>
        <Link to="/login">
          <button>I wanna test it!</button>
        </Link>
      </div>
    );
  }
}

export default Tutorial;
