import React from "react";
import "./Tracker.css";
import {Link} from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';



class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        listing: {}
    }
}

deleteListingRequest = listing_id => {
  const id = this.props.match.params.listing_id
  fetch(`${config.API_ENDPOINT}/api/listings/${id}`, {
      method: "DELETE",
      headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
  })
      .then(res => {
          if (!res.ok) {
              return res.json().then(error => {
                  throw error;
              });
          }
          return alert('This brew guide has been deleted');
      })
};


componentDidMount() {
  const id = this.props.match.params.listing_id
  fetch(`${config.API_ENDPOINT}/api/listings/${id}`, {
      headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
  })
      .then(res => res.json())
      .then(listing => {
          this.setState({
              listing: listing
          })
      })
}


  render() {
    return (
      <div>
        <h2>{this.state.listing.title}</h2>
        <div className="meta">
          <h3>{this.state.listing.company_name}</h3>
          <h3>{this.state.listing.date_applied}</h3>
        </div>

        <section className="contact">
          <div>
            <p>{this.state.listing.source}</p>
            <p>{this.state.listing.location}</p>
            <p>{this.state.listing.contact}</p>
          </div>

          <div>
            <p>{this.state.listing.date_interviewed}</p>
            <p>{this.state.listing.phone}</p>
            <p>{this.state.listing.email}</p>
          </div>
        </section>

        <div className="stages">
          <button>Lead</button>
          <button>Applied</button>
          <button>Interviewed</button>
          <button>Denied</button>
        </div>

        <h4>Next steps/ Notes</h4>
        <p>
        {this.state.listing.notes}
        </p>

        <hr></hr>

        <h4>Job Details/ Listing</h4>
        <p>
        {this.state.listing.listing}
        </p>

        <Link to="/dashboard"><button>Back</button></Link>
        <Link to="/update/:listing_id"><button>Edit</button></Link>
        <Link to="/dashboard"><button onClick={this.deleteListingRequest}>Delete Tracker</button></Link>
      </div>
    );
  }
}

Tracker.defaultProps = {
  match: {
      params: {
          
      }
  }
}

export default Tracker;
