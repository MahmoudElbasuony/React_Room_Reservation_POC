import React, { Component } from 'react';
import { connect } from "react-redux";
import "./mettingrooms.component.min.css";

MappedStateToProps = (state) => {
    return {
        MeetingRooms: state.MeetingRooms
    };
};


class MeetingRoomsComponent {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="jumbotron">
                <h2> Welcome to Meeting Rooms </h2>
            </div>
        );
    }
}




export default connect(MappedStateToProps)(MeetingRoomsComponent);