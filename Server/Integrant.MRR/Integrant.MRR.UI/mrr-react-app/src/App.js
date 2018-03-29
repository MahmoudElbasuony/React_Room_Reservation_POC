import React, { Component } from 'react';
import { connect } from "react-redux";
import "./styles/style.min.css";
import HomeComponent from "./components/home/home.component";



const MappedStateToProps = (state) => {
  return {
      
  };
};



class App extends Component {



  render() {


    return (
      <div className="container">

        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="javascript:void(0)"><b >MRR <i className="fa fa-meetup"></i></b></a>
          <ul className="nav navbar-nav navbar-collapse">
            <li className="nav-item"><a className="nav-link" href="javascript:void(0)">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="javascript:void(0)">About</a></li>
          </ul>
        </nav>

        <div className="row app-body">
          <div className="col">


            <HomeComponent />

          </div>
        </div>
      </div>
    );
  }
}




export default connect(MappedStateToProps)(App);