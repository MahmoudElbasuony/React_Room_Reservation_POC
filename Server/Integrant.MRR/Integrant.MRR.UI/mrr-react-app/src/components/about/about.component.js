import React, { Component } from 'react';
import { connect } from "react-redux";
import "./about.component.min.css";


const MappedStateToProps = (state) => {
    return {

    };
};


class AboutComponent extends Component {

 

    render() {
        return (
            <div className="jumbotron">
                <h2> MRR System </h2>
            </div>
        );
    }
}




export default connect(MappedStateToProps)(AboutComponent);