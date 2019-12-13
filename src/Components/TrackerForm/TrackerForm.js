import React from "react";
import "./TrackerForm.css";

// This component will render out a form that will collect all user data in its state and POST that information
// to the database

class TrackerForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" placeholder="Job Title" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Date Found/Date Applied" />
          </div>

          <div>
            <input type="text" placeholder="Source Found" />
            <input type="text" placeholder="Hiring Manager/Contact" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Interview Date" />
          </div>

          <div>
            <select>
              <option>Lead</option>
              <option>Applied</option>
              <option>Interviewed</option>
              <option>Denied</option>
            </select>
            <input type="text" placeholder="Notes" class="notes" />
            <input type="text" placeholder="Job Details" class="notes" />
            <input type="text" placeholder="Next Steps" class="notes" />
          </div>

          <button type="submit">Start Tracking</button>
        </form>
      </div>
    );
  }
}

export default TrackerForm;
