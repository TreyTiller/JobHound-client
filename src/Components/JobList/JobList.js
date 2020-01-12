import React from "react";
import "./JobList.css";
import Trash from "../../../src/Images/icons8-delete-bin-50.png";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import config from "../../config";

// This will render a set of filterable cards that are used to navigate to a specific job tracker

// The functionality of this is making a fetch call on componentDidMount() to GET information from
// Job listings table and place in a object. We then map through that object on render and display
// the most important data. We create a endpoint param based on job_id

class JobList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         "listData": []
  //     }
  // }

  // componentDidMount() {
  //   fetch(`${config.API_ENDPOINT}/api/listings`, {
  //       headers: {
  //           authorization: `Bearer ${TokenService.getAuthToken()}`
  //       }
  //   })
  //       .then(res => res.json())
  //       .then(listings => {
  //           this.setState({
  //               listData: listings
  //           })
  //       })
  // }
  render() {
    return (
      <Link className="whole-list">
        {this.props.listData.map(card => (
          <Link className="listing">
            <Link to={"/tracker/" + card.id} style={{ textDecoration: "none" }}>
              <div className="card">
                <h3 className="info-t">{card.title}</h3>
                <hr className="line"></hr>
                <div className="meta">
                  <div className="company">
                    <p className="info-c">{card.company_name}</p>
                  </div>
                  <div>
                    <p className="info-l">{card.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          </Link>
        ))}
      </Link>
    );
  }
}

JobList.defaultProps = {
  match: {
    params: {}
  }
};

export default JobList;
