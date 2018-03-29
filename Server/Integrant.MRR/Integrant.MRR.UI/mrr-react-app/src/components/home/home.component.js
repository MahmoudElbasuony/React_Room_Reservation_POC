import React, { Component } from 'react';
import { connect } from "react-redux";
import "./home.component.min.css";


const MappedStateToProps = (state) => {
    return {
        
    };
};


class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="jumbotron">
                <h2> Welcome to MRR System </h2>
                <button className="btn btn-link border-dark" type="button"  > Learn more</button>
            </div>
        );
    }
}




export default connect(MappedStateToProps)(HomeComponent);