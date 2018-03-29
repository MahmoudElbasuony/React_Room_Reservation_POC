import React, { Component } from 'react';
import { connect } from "react-redux";
import "./mettingrooms.component.min.css";

const  MappedStateToProps = (state) => {
    return {
        MeetingRooms: state.MeetingRooms
    };
};


class MeetingRoomsComponent extends Component {

   

    render() {
        return (
            <div className="jumbotron">
                <h2> Welcome to Meeting Rooms </h2>
            </div>
        );
    }
}




export default connect(MappedStateToProps)(MeetingRoomsComponent);