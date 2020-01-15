import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import Logout from "../../Images/logout-100.png";
import Add from "../../Images/add-100.png";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <div className="search-nav">
          <Link to="/login" className="link">
            <button className="button nav">Logout</button>
          </Link>
          <form className="search-input" onSubmit={this.props.submitSearch}>
            <input
              type="text"
              placeholder="Search"
              className="search"
              onChange={evt => this.props.handleInputChange(evt)}
            />
          </form>
          <Link to="/new-tracker" className="link">
            <button className="button nav">Add Tracker</button>
          </Link>
        </div>

        <div className="top-nav-mobile">
          <div className="search-nav-mobile">
            <Link to="/login" className="link">
              <img src={Logout} alt="Logout" className="hidden"></img>
            </Link>
            <form className="search-input" onSubmit={this.props.submitSearch}>
              <input
                type="text"
                placeholder="Search"
                className="search"
                onChange={evt => this.props.handleInputChange(evt)}
              />
            </form>
            <Link to="/new-tracker" className="link">
              <img src={Add} alt="Add Tracker Button" className="hidden"></img>
            </Link>
          </div>

          {/* This Creates the top navigation in mobile view */}

          <div className="top-bar">
            <button
              className="filter-mobile"
              onClick={e => this.props.setSection("All")}
            >
              All
            </button>
            <button
              className="filter-mobile"
              onClick={e => this.props.setSection("Lead")}
            >
              Leads
            </button>
            <button
              className="filter-mobile"
              onClick={e => this.props.setSection("Applied")}
            >
              Applied
            </button>
            <button
              className="filter-mobile"
              onClick={e => this.props.setSection("Interviewed")}
            >
              Interviewed
            </button>
            <button
              className="filter-mobile"
              onClick={e => this.props.setSection("Archived")}
            >
              Archive
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
