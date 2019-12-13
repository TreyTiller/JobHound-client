import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "../SearchBar/SearchBar";
import JobList from "../JobList/JobList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <SearchBar />
        <JobList />
      </div>
    );
  }
}

export default Dashboard;
