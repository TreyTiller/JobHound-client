import React from "react";
import Logo from "../../../src/Job Hound Logo 100px.png";
import { slide as Menu } from 'react-burger-menu';
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
      <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
    );
  }
}

export default Sidebar;
