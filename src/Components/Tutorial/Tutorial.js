import React from "react";
import "./Tutorial.css";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as dogData from "../../Images/job-hound-loader.json";
import Logo from "../../Images/Job Hound Logo 260px.png";
import Dash from "../../Images/dashShot.png";
import Form from "../../Images/from.png";
import Tracker from "../../Images/track.png";
import TrackerMobile from "../../Images/TrackerMobile.PNG";
import DashMobile from "../../Images/DashMobile.PNG";
import FormMobile from "../../Images/FormMobile.PNG";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dogData.default
};

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: undefined,
      done: undefined
    };
  }

  static defaultProps = {
    onLoginSuccess: () => {}
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null, loading: true });

    AuthApiService.postLogin({
      user_name: "TriggaTrey",
      password: "Trigga001"
    })

      .then(res => {
        this.setState({ done: true, loading: false });
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error, loading: false, done: false });
      });
  };

  render() {
    const { error } = this.state;
    if (this.state.loading || this.state.done) {
      return (
        <div className="loading">
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              <h4 className="load-label">Tracking Down Opportunity</h4>
              {!this.state.done ? (
                <Lottie options={defaultOptions} height={300} width={281} />
              ) : (
                <Lottie options={defaultOptions} height={120} width={120} />
              )}
            </div>
          </FadeIn>
        </div>
      );
    }
    return (
      <div>
        <div role="alert">
          {error && <p className="red">{this.state.error}</p>}
        </div>
        <div className="logo-header">
          <img src={Logo} alt="job hound logo" className="login-logo"></img>
        </div>

        <div className="welcome">
          <h2 className="howdy">
            Howdy There! Welcome to Job Hound! The best solution to staying
            organized during your job hunt!
          </h2>
          <div className="button-container">
            <div className="buttons">
              <div className="button" id="button-4">
                <div id="underline" />
                <Link to="/register">
                  <button className="butt">Register</button>
                </Link>
              </div>

              <div className="button" id="button-4">
                <div id="underline" />
                <Link to="/login">
                  <button className="butt">Login</button>
                </Link>
              </div>

              <div className="button" id="button-4">
                <div id="underline" />
                <button onClick={this.handleSubmitJwtAuth} className="butt">
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="seperator"></hr>
        <h3 className="body">
          The purpose of this application is to help you keep track of possible
          jobs during whatever part of the application process you are.
          Organization is one of the most important things to pay attention to
          during your job hunt, and Job Hound will help you effectively track
          down your next amazing opportunity.
        </h3>
        <h3 className="body">
          Below is a quick guide on how to use the application. Take a peek and
          get to tracking!
        </h3>
        <hr className="seperator"></hr>

        <div className="meta-dash">
          <img
            src={DashMobile}
            alt="mobile dashboard"
            className="screen-mobile"
          ></img>
          <img src={Dash} alt="dashboard" className="screen"></img>
          <p className="script">
            This will be your main dashboard! The navigation is simple. On the
            left you have your filtering options. This will filter your job
            trackers by what stage they are in. So if you've applied for a role
            and need to quickly find it you click 'applied' and Job Hound will
            show you only opportunities that you've applied to.For an even
            faster navigation you have the option to search for a job title in
            the search bar on the top. To the right of the search bar is the
            'Add Tracker' button which leads you to the job tracking form!
          </p>
        </div>

        <div className="meta-dash">
          <img
            src={FormMobile}
            alt="mobile job tracking form"
            className="screen-mobile"
          ></img>
          <img src={Form} alt="job tracking form" className="screen"></img>
          <p className="script">
            This is how you will set up new opprotunities for Job Hound to keep
            track of. The form is fairly straight forward. The only important
            thing to say here is to make sure to chose the right stage that your
            opportunity is in! This leads us to the individual trackers.
          </p>
        </div>

        <div className="meta-dash">
          <img
            src={TrackerMobile}
            alt="mobile job tracker"
            className="screen-mobile"
          ></img>
          <img src={Tracker} alt="job tracker" className="screen"></img>
          <p className="script">
            This will be where all of your form information will be stored.
            Phone numbers, names, emails, and job details are all storable here
            so you never forget a thing! You also have the opportunity to edit
            or delete the existing tracker!
          </p>
        </div>

        <h3 className="body">
          Good Luck out there! You're going to do great things!
        </h3>

        <div className="button-container">
          <div className="button" id="button-4">
            <div id="underline" />
            <Link to="/register">
              <button className="butt">Register</button>
            </Link>
          </div>

          <div className="button" id="button-4">
            <div id="underline" />
            <Link to="/login">
              <button className="butt">Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;
