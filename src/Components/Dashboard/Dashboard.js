import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "../SearchBar/SearchBar";
import JobList from "../JobList/JobList";
import "./Dashboard.css";
import TokenService from '../../services/token-service';
import config from '../../config';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "listData": [],
        section: 'All',
        search: ""
    }
}

setSection = (section) => {
  this.setState({
    section
  })
}

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/listings`, {
        headers: {
            authorization: `Bearer ${TokenService.getAuthToken()}`
        }
    })
        .then(res => res.json())
        .then(listings => {
            this.setState({
                listData: listings
            })
        })
  }

  handleInputChange = (evt) => {
    let newSearch = evt.target.value;
    this.setState({
      search: newSearch
    })
  }

  render() {
    const listData = this.state.listData.filter(item => {
      if(this.state.section !== "All" && item.stage !== this.state.section) {
        return false
      } else {
        return true
      }
    })

    return (
      <div>
        <div className="main">
            <SearchBar className="search" onChange = {this.handleInputChange}/>
            <JobList listData = {listData}/>
        </div>
        <div className="sidebar">
          <Sidebar setSection={this.setSection} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
