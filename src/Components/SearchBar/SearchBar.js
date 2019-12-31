import React from "react";
import "./SearchBar.css";
import { Link } from 'react-router-dom'

// This component will render a search bar that filters the current list by the user input

// The search parameter will be by company due to the infrequency of repeating an application to one certain
// company

class SearchBar extends React.Component {

  render() {
    return (
      <div className="top-nav">
        <Link to="/login"><button className="button">Logout</button></Link>
        <form className="search-input">
          <input type="text" placeholder="Search" className="search" />
        </form>
        <Link to="/new-tracker"><button className="button">Add Tracker</button></Link>
      </div>
    );
  }
}

export default SearchBar;
