import React, { Component } from 'react';
import { connect } from "react-redux";
import MeetingRoomsActions from "../../redux/actions/meetingRoomActions";
import "./mettingrooms.component.min.css";
import swal from "sweetalert2/dist/sweetalert2.all.min";
import alertify from "alertify.js/dist/js/alertify";

const MappedStateToProps = (state) => {
    return {
        MeetingRooms: state.MeetingRooms
    };
};


class MeetingRoomsComponent extends Component {



    constructor() {

        super();

        this.DeleteMeetingRoom = this.DeleteMeetingRoom.bind(this);

        this.ViewReservations = this.ViewReservations.bind(this);

    }

    componentDidMount() {
        this.props.dispatch(MeetingRoomsActions.FetchMeetingRooms());
    }


    DeleteMeetingRoom(meetingRoom) {

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                alertify.success("Success log message");
            }
        });


    }


    ViewReservations(meetingRoom) {

    }


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
                        { this.RenderMeetingRooms(this.props.MeetingRooms) }
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
            <div className="table-responsive">
                <table className="table table-hover table-dark table-striped ">
                    <thead className="text-center">
                        <tr>
                            <td>Code</td>
                            <td>Floor</td>
                            <td>MaxSeatsCount</td>
                            <td>HasSpeakers</td>
                            <td>HasMonitor</td>
                            <td>HasProjector</td>
                            <td></td>
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
            <tr className="text-center" key={meetingRoom.ID} >
                <td>
                    {meetingRoom.Code}
                </td>
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
                <td>
                    <div className="btn-group btn-group-sm">
                        <a className="btn btn-info" onClick={this.ViewReservations} title="View Reservations" >View <i className="fa fa-eye"></i></a>
                        <a className="btn btn-danger" onClick={this.DeleteMeetingRoom} title="Delete">Delete <i className="fa fa-remove"></i></a>
                    </div>
                </td>

            </tr>
        );
    }
}




export default connect(MappedStateToProps)(MeetingRoomsComponent);