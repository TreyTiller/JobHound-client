import React from "react";
import "./JobList.css";
import { Link } from "react-router-dom";

class JobList extends React.Component {
  render() {
    return (
      <div className="whole-list">
        {this.props.listData.map(card => (
          <div className="listing">
            <Link to={"/tracker/" + card.id} style={{ textDecoration: "none" }}>
              <div className="card">
                <h3 className="info-t">{card.title}</h3>
                <hr className="line"></hr>
                <div className="meta">
                  <div className="company">
                    <p className="info-c">{card.company_name}</p>
                  </div>
                  <hr className="line-2"></hr>
                  <div>
                    <p className="info-l">{card.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

JobList.defaultProps = {
  match: {
    params: {}
  }
};

export default JobList;
