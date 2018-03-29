import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routing/routes";
import "./styles/style.min.css";




const MappedStateToProps = (state) => {
  return {

  };
};



class App extends Component {



  render() {


    return (
      <Router>
        <div className="container">


          <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">

            <NavLink className="navbar-brand" exact to="/"><b >MRR <i className="fa fa-meetup"></i></b></NavLink>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top_navbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="top_navbar" className="collapse navbar-collapse text-center">
              <ul id="top_navbar" className="nav navbar-nav">
                <li className="nav-item"><NavLink exact to="/" className="nav-link"  ><i className="fa fa-home"></i> Home</NavLink></li>
                <li className="nav-item"><NavLink exact to="/meetingrooms" className="nav-link"  ><i className="fa fa-group"></i> Meeting Rooms</NavLink></li>
              </ul>
            </div>



          </nav>

          <div className="row app-body">
            <div className="col">

              <Routes />

            </div>
          </div>


          <footer className="fixed-bottom">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <ul className="nav navbar-nav">

                <li className="nav-item"><NavLink exact to="/about" className="nav-link"  ><i className="fa fa-group"></i> About</NavLink></li>
              </ul>

            </nav>
          </footer>

        </div>
      </Router>
    );
  }
}




export default connect(MappedStateToProps)(App);