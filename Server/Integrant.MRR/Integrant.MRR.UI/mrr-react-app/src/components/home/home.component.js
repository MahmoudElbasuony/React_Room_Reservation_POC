import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./home.component.min.css";


 


class HomeComponent extends Component {



    render() {
        return (
            <div className="jumbotron">
                <h2> Welcome to MRR System </h2>
                <NavLink exact to="/about" className="btn btn-link border-dark"  >Learn more</NavLink>
            </div>
        );
    }
}




export default (HomeComponent);