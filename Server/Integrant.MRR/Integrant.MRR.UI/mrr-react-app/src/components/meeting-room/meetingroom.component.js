import React, { Component } from 'react';
import { connect } from "react-redux";
import "./meetingroom.component.min.css";

const MappedStateToProps = (state) => {
    return {};
};

class MeetingRoomComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="jumbotron">
                <h2> Welcome to Meeting Room X </h2>
            </div>
        );
    }
}




export default connect(MappedStateToProps)(MeetingRoomComponent);