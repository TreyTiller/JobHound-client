import React from "react";
import "./SearchBar.css";

// This component will render a search bar that filters the current list by the user input

// The search parameter will be by company due to the infrequency of repeating an application to one certain
// company

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="search by company name" />
          <button type="submit">Search</button>
        </form>
        <button>Add Tracker</button>
      </div>
    );
  }
}

export default SearchBar;
