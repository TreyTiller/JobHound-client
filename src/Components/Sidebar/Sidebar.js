import React from "react";
import Logo from "../../../src/Images/Job Hound Logo-white-280.png";
import "./Sidebar.css";

// This component will render the list of stages to filter the job listings by, and a logo. This will be continuous
// on desktop view and on mobile view will appear as a hamburger sidebar

// Sidebar will render like stated and wait for user events.

// The logo will lead back to the main dashboard with all job listings as well as the 'all' button

// The functionality will be a GET request to the job listing table for all job listings where column 'stage' =
// the corresponding stage:
// select(*).from('job-listings').where('stage') = ('Lead')

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
