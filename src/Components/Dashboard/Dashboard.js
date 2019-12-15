import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "../SearchBar/SearchBar";
import JobList from "../JobList/JobList";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="main">
            <SearchBar className="search" />
            <JobList />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
