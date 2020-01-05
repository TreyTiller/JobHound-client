import React from "react";
import "./TrackerForm.css";
import Logo from "../../../src/Images/Job Hound Logo 100px.png";
import TokenService from "../../services/token-service";
import config from "../../config";
import {Link} from 'react-router-dom';

class TrackerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      company_name: "",
      stage: "",
      source: "",
      location: "",
      contact: "",
      phone: "",
      email: "",
      notes: "",
      listing: "",
      date_interviewed: "",
      date_appllied: ""
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  updateState = evt => {
    let newStage = evt.target.value;
    this.setState({
      stage: newStage
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.stage === "") {
      return alert("The stage is a required field");
    } else {
      const { title } = this.state;
      alert(`Job Hound is now tracking a ${title} opprotunity!`);
      var data = {
        title: this.state.title,
        company_name: this.state.company_name,
        stage: this.state.stage,
        location: this.state.location,
        date_appllied: this.state.date_appllied,
        date_interviewed: this.state.date_interviewed,
        email: this.state.email,
        phone: this.state.phone,
        contact: this.state.contact,
        notes: this.state.notes,
        source: this.state.source,
        listing: this.state.listing
      };

      let listing = {};
      let apiRequest;
      if (this.state.id) {
        apiRequest = fetch(
          `${config.API_ENDPOINT}/api/listings/${this.state.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
          }
        );
      } else {
        apiRequest = fetch(`${config.API_ENDPOINT}/api/listings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${TokenService.getAuthToken()}`
          },
          body: JSON.stringify(data)
        });
      }
      apiRequest
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => {
          listing = response;
        })
        .then(response => {
          this.props.history.push("/dashboard");
        });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.listing_id;
    fetch(`${config.API_ENDPOINT}/api/listings/${id}`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(listing => {
        this.setState({
          ...listing
        });
      });
  }

  render() {
    const {
      title,
      company_name,
      stage,
      location,
      date_appllied,
      date_interviewed,
      email,
      phone,
      contact,
      notes,
      source,
      listing
    } = this.state;
    return (
      <div>
        <div className="logo-header">
          <img src={Logo} alt="job hound logo" />
        </div>
        <form onSubmit={this.handleSubmit} className="tracker-form">
          <div>
            <input
              required
              name="title"
              onChange={this.handleInputChange}
              value={title}
              placeholder="Job Title"
            />
            <input
              required
              name="company_name"
              onChange={this.handleInputChange}
              value={company_name}
              placeholder="Company Name"
            />
            <input
              name="date_appllied"
              onChange={this.handleInputChange}
              value={date_appllied}
              placeholder="Date Found/Date Applied"
            />
            <input
              name="listing"
              onChange={this.handleInputChange}
              value={listing}
              placeholder="Job Details"
            />
            <input
              required
              name="location"
              onChange={this.handleInputChange}
              value={location}
              placeholder="Location"
            />
          </div>

          <div>
            <input
              name="source"
              onChange={this.handleInputChange}
              value={source}
              placeholder="Source Found"
            />
            <input
              name="contact"
              onChange={this.handleInputChange}
              value={contact}
              placeholder="Hiring Manager/Contact"
            />
            <input
              name="email"
              onChange={this.handleInputChange}
              value={email}
              placeholder="Email"
            />
            <input
              name="phone"
              onChange={this.handleInputChange}
              value={phone}
              placeholder="Phone"
            />
            <input
              name="date_interviewed"
              onChange={this.handleInputChange}
              value={date_interviewed}
              placeholder="Interview Date"
            />
          </div>

          <div>
            <select
              required
              value={this.state.stage || ""}
              onChange={evt => this.updateState(evt)}
              name={this.state.stage}
            >
              <option value="Lead">Lead</option>
              <option value="Applied">Applied</option>
              <option value="Interviewed">Interviewed</option>
              <option value="Archived">Archive</option>
            </select>
            <input
              name="notes"
              onChange={this.handleInputChange}
              value={notes}
              placeholder="Notes"
            />
          </div>
          <Link to="/dashboard"><button>Back</button></Link>
          <button type="submit">Start Tracking</button>
        </form>
      </div>
    );
  }
}

export default TrackerForm;
