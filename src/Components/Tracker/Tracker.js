import React from "react";
import "./Tracker.css";


class Tracker extends React.Component {
  render() {
    return (
      <div>
        <h2>Job title</h2>
        <div class="meta">
          <h3>Company Name</h3>
          <h3>Date Applied</h3>
        </div>

        <section class="contact">
          <div>
            <p>Source Found</p>
            <p>Location</p>
            <p>Hiring Manager/ Contact</p>
          </div>

          <div>
            <p>Interview Date</p>
            <p>Phone</p>
            <p>Email</p>
          </div>
        </section>

        <div class="stages">
          <button>Lead</button>
          <button>Applied</button>
          <button>Interviewed</button>
          <button>Denied</button>
        </div>

        <h4>Next steps/ Notes</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <hr></hr>

        <h4>Job Details/ Listing</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <button>Delete Tracker</button>
      </div>
    );
  }
}

export default Tracker;
