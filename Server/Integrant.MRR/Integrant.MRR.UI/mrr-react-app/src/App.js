import React, { Component } from 'react';
import "./styles/style.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">

        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand"   href="javascript:void(0)"><b >MRR</b></a>
          <ul className="nav navbar-nav navbar-collapse">
            <li className="nav-item"><a className="nav-link" href="javascript:void(0)">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="javascript:void(0)">About</a></li>
          </ul>
        </nav>
 
        <div className="row app-body">
          <div className="col">
            <div className="jumbotron">
              <h2> Welcome to MRR System</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
