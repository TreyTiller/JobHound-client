import React from "react";
import Logo from "../../../src/Images/Job Hound Logo-white-280.png";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="job hound logo" className="dash-logo"></img>
        </div>
        <div className="filters">
          <hr></hr>
          <button
            className="filter"
            onClick={e => this.props.setSection("All")}
          >
            All
          </button>
          <hr></hr>
          <button
            className="filter"
            onClick={e => this.props.setSection("Lead")}
          >
            Leads
          </button>
          <hr></hr>
          <button
            className="filter"
            onClick={e => this.props.setSection("Applied")}
          >
            Applied
          </button>
          <hr></hr>
          <button
            className="filter"
            onClick={e => this.props.setSection("Interviewed")}
          >
            Interviewed
          </button>
          <hr></hr>
          <button
            className="filter"
            onClick={e => this.props.setSection("Archived")}
          >
            Archive
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
