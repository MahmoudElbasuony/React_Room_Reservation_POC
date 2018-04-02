import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MeetingRoomsActions from "../../redux/actions/meetingRoomActions";
import "./mettingrooms.component.min.css";
import swal from "sweetalert2/dist/sweetalert2.all.min";


const MappedStateToProps = (state) => {
    return {
        MeetingRooms: state.MeetingRooms.MeetingRooms,
        CreatedMeetingRoom: state.MeetingRooms.CreatedMeetingRoom,
        ItemsFlowGrid: state.MeetingRooms.ItemsFlowGrid
    };
};


class MeetingRoomsComponent extends Component {



    constructor() {

        super();

        this.SwitchItemsFlow = this.SwitchItemsFlow.bind(this);
    }

    SwitchItemsFlow() {
        this.props.dispatch(MeetingRoomsActions.SwitchItemsFlow())
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

                this.props.dispatch(MeetingRoomsActions.DeleteMeetingRoom(meetingRoom.ID));

            }

        });


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
                                <button type="button" onClick={this.SwitchItemsFlow} title={this.props.ItemsFlowGrid ? 'View in table' : 'View in grid'} className="btn btn-sm btn-primary pull-right meeting-rooms-items-flow">
                                    {
                                        (() => {

                                            if (this.props.ItemsFlowGrid)
                                                return (<i className="fa fa-table"></i>);
                                            else
                                                return (<i className="fa fa-delicious"></i>);

                                        })()
                                    }
                                </button>
                                <Link to="/meetingrooms/new" className="btn btn-sm btn-warning pull-right">Add Meeting Room <i className="fa fa-plus"></i></Link>
                            </div>
                        </div>


                    </div>
                    <div className="card-body">

                        <div className="row">
                            {
                                (() => (this.props.ItemsFlowGrid ?
                                    this.RenderMeetingRoomsInGrid(this.props.MeetingRooms) :
                                    this.RenderMeetingRoomsInTable(this.props.MeetingRooms))
                                )()
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    RenderMeetingRoomsInGrid(MeetingRooms) {

        return MeetingRooms.map((meetingRoom) =>
            (

                <div key={meetingRoom.ID} className="card bg-dark text-light grid-meeting-room">
                    <div className="card-header">
                        <h5 className="card-title"><i className="fa fa-group"></i> Meeting Room : {meetingRoom.Code} </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">

                                <div>Floor :</div>
                                <div>Max Seats Count :</div>
                                <div>Has Speakers :</div>
                                <div>Has Monitor :</div>
                                <div>Has Projector :</div>

                            </div>
                            <div className="col-sm-auto">
                                <div>
                                    {meetingRoom.Floor}
                                </div>
                                <div>
                                    {meetingRoom.MaxSeatsCount}
                                </div>
                                <div >
                                    <input type="checkbox" className="form-check-inline" checked={meetingRoom.HasSpeakers} onChange={() => { }} />
                                </div>
                                <div>
                                    <input type="checkbox" className="form-check-inline" checked={meetingRoom.HasMonitor} onChange={() => { }} />
                                </div>
                                <div>
                                    <input type="checkbox" className="form-check-inline" checked={meetingRoom.HasProjector} onChange={() => { }} />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        {this.MeetingRoomControls(meetingRoom)}
                    </div>
                </div>
            )
        );
    }

    RenderMeetingRoomsInTable(MeetingRooms) {
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
                        {
                            (() => {

                                if (MeetingRooms.length > 0)
                                    return MeetingRooms.map((meetingRoom) => this.RenderMeetingRoomInTable(meetingRoom));

                                return (
                                    <tr className="text-center bg-secondary">
                                        <td colSpan="7">No meeting rooms available</td>
                                    </tr>
                                );

                            })()


                        }
                    </tbody>
                </table>
            </div>
        );
    }

    RenderMeetingRoomInTable(meetingRoom) {

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
                    {this.MeetingRoomControls(meetingRoom)}
                </td>

            </tr>
        );
    }

    MeetingRoomControls(meetingRoom) {
        return (
            <div className="btn-group btn-group-sm ">
                <Link to="" className="btn btn-info" onClick={() => this.ViewReservations(meetingRoom)} title="View Reservations" >View <i className="fa fa-eye"></i></Link>
                <a className="btn btn-danger" onClick={() => this.DeleteMeetingRoom(meetingRoom)} title="Delete">Delete <i className="fa fa-remove"></i></a>
            </div>
        );
    }
}




export default connect(MappedStateToProps)(MeetingRoomsComponent);