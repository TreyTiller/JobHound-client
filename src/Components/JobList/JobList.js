import React from "react";
import "./JobList.css";
import Trash from "../../../src/icons8-delete-bin-50.png";
import { Link } from "react-router-dom";

// This will render a set of filterable cards that are used to navigate to a specific job tracker

// The functionality of this is making a fetch call on componentDidMount() to GET information from
// Job listings table and place in a object. We then map through that object on render and display
// the most important data. We create a endpoint param based on job_id

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        },
        {
          jobTitle: "Title",
          company: "Company Name",
          location: "Atlanta"
        }
      ]
    };
  }
  render() {
    return (
      <Link className="whole-list">
        {this.state.listData.map(card => (
          <Link className="listing">
            <Link to="/tracker">
              <div className="card">
                <h3>{card.jobTitle}</h3>
                <div className="meta">
                  <div>
                    <p>{card.company}</p>
                  </div>
                  <div>
                    <p>{card.location}</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="delete-button">
              <button className="delete">
                <img src={Trash} alt="delete button" className="trash"></img>
              </button>
            </div>
          </Link>
        ))}
      </Link>
    );
  }
}

export default JobList;
