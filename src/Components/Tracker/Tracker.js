import React from "react";
import "./Tracker.css";
import { Link } from "react-router-dom";
import config from "../../config";
import TokenService from "../../services/token-service";
import Logo from "../../../src/Images/Job Hound Logo 100px.png";

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
  }

  deleteListingRequest = listing_id => {
    const id = this.props.match.params.listing_id;
    fetch(`${config.API_ENDPOINT}/api/listings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error;
        });
      }
      return alert("This brew guide has been deleted");
    });
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
          listing: listing
        });
      });
  }

  render() {
    return (
      <div>
        <div className="lil-header">
          <img src={Logo} alt="job hound logo" className="lil-logo" />
        </div>
        <h4 className="top">{this.state.listing.title}</h4>

        <div className="page-container">
          <div className="butt-dash">
            <Link to="/dashboard" className="link">
              <button className="button nav">Back</button>
            </Link>

            <Link to={"/update/" + this.state.listing.id} className="link">
              <button className="button nav">Edit</button>
            </Link>
            <Link to="/dashboard" className="link">
              <button
                className="button nav hidden"
                onClick={this.deleteListingRequest}
              >
                Delete Tracker
              </button>
            </Link>
          </div>

          <div className="meta-dash">
            <p className="label">Company:</p>
            <p>{this.state.listing.company_name}</p>
            <p className="label">Location:</p>
            <p>{this.state.listing.location}</p>
            <p className="label">Application Date:</p>
            <p>{this.state.listing.date_appllied}</p>
            <p className="label">Interview Date:</p>
            <p>{this.state.listing.date_interviewed}</p>
            <p className="label">Contact:</p>
            <p>{this.state.listing.phone}</p>
            <p>{this.state.listing.email}</p>
          </div>

          <div className="extra">
            <p className="label">Stage:</p>
            <p>{this.state.listing.stage}</p>
            <p className="label">Source:</p>
            <p>{this.state.listing.listing}</p>
            <p className="label">Point of Contact:</p>
            <p>{this.state.listing.contact}</p>
            <p className="label">Notes:</p>
            <p>{this.state.listing.notes}</p>
          </div>

          <div className="butt-dash-mobile">
            <Link to="/dashboard" className="link">
              <button className="button nav bottom">Back</button>
            </Link>
            <Link to={"/update/" + this.state.listing.id} className="link">
              <button className="button nav bottom">Edit</button>
            </Link>
            <Link to="/dashboard" className="link">
              <button
                className="button nav bottom"
                onClick={this.deleteListingRequest}
              >
                Delete Tracker
              </button>
            </Link>
          </div>
        </div>

        {/* <hr className="break"></hr>


        <Link to="/dashboard">
          <button>Back</button>
        </Link>
        <Link to={"/update/" + this.state.listing.id}>
          <button>Edit</button>
        </Link>
        <Link to="/dashboard">
          <button onClick={this.deleteListingRequest}>Delete Tracker</button>
        </Link> */}
      </div>
    );
  }
}

Tracker.defaultProps = {
  match: {
    params: {}
  }
};

export default Tracker;
