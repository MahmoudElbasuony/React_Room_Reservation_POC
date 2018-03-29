import React, { Component } from 'react';
import { connect } from "react-redux";
import "./mettingrooms.component.min.css";

const MappedStateToProps = (state) => {
    return {
        MeetingRooms: state.MeetingRooms
    };
};


class MeetingRoomsComponent extends Component {





    render() {
        return (
            <div className="jumbotron">
                <div className="card bg-light">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title"><i className="fa fa-group"></i> Meeting Rooms </h5>
                            </div>
                            <div className="col">

                            </div>
                        </div>


                    </div>
                    <div className="card-body">
                        {this.RenderMeetingRooms(this.props.MeetingRooms)}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-warning pull-right">Add Room <i className="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
        );
    }


    RenderMeetingRooms(MeetingRooms) {
        return (
            <div className="table-responsive-sm">
                <table className="table table-hover table-dark table-striped ">
                    <thead className="text-center">
                        <tr>

                            <td>Floor</td>
                            <td>MaxSeatsCount</td>
                            <td>HasSpeakers</td>
                            <td>HasMonitor</td>
                            <td>HasProjector</td>
                        </tr>
                    </thead>
                    <tbody>
                        {MeetingRooms.map((meetingRoom) => this.RenderMeetingRoom(meetingRoom))}
                    </tbody>
                </table>
            </div>
        );
    }

    RenderMeetingRoom(meetingRoom) {

        return (
            <tr className="text-center" key={meetingRoom.Code} >
                <td>
                    {meetingRoom.Floor}
                </td>
                <td>
                    {meetingRoom.MaxSeatsCount}
                </td>
                <td >
                    <input type="checkbox" className="form-check-inline" checked={meetingRoom.HasSpeakers} onChange={() => { }} />
                </td>
                <td>
                    <input type="checkbox" className="form-check-inline" checked={meetingRoom.HasMonitor} onChange={() => { }} />
                </td>
                <td>
                    <input type="checkbox" className="form-check-inline" checked={meetingRoom.HasProjector} onChange={() => { }} />
                </td>
            </tr>
        );
    }
}




export default connect(MappedStateToProps)(MeetingRoomsComponent);