import React, { Component } from 'react';
import { connect } from "react-redux";
import "./meetingroom.component.min.css";
import Actions from '../../redux/actions/meetingRoomActions';
import meetingRoomActions from '../../redux/actions/meetingRoomActions';
import swal from "sweetalert2";
import { Redirect } from "react-router-dom";

const MappedStateToProps = (state) => {
    return {
        IsLoading: state.MeetingRooms.IsLoading,
        CurrentMeetingRoom: state.MeetingRooms.CurrentMeetingRoom,
        CreatedMeetingRoom: state.MeetingRooms.CreatedMeetingRoom
    };
};

class MeetingRoomComponent extends Component {




    constructor() {

        super();

        this.SaveMeetingRoom = this.SaveMeetingRoom.bind(this);
        this.OnCodeChange = this.OnCodeChange.bind(this);
        this.OnFloorChange = this.OnFloorChange.bind(this);
        this.OnMaxSeatsChange = this.OnMaxSeatsChange.bind(this);
        this.OnHasMonitorChange = this.OnHasMonitorChange.bind(this);
        this.OnHasProjectorChange = this.OnHasProjectorChange.bind(this);
        this.OnHasSpeakerChange = this.OnHasSpeakerChange.bind(this);



    }



    OnFloorChange(event) {

        this.props.dispatch(meetingRoomActions.ChangeMeetingRoom({ Floor: event.target.value }));

    }
    OnMaxSeatsChange(event) {

        this.props.dispatch(meetingRoomActions.ChangeMeetingRoom({ MaxSeatsCount: event.target.value }));

    }
    OnCodeChange(event) {

        this.props.dispatch(meetingRoomActions.ChangeMeetingRoom({ Code: event.target.value }));

    }
    OnHasMonitorChange(event) {

        this.props.dispatch(meetingRoomActions.ChangeMeetingRoom({ HasMonitor: event.target.checked }));

    }
    OnHasSpeakerChange(event) {

        this.props.dispatch(meetingRoomActions.ChangeMeetingRoom({ HasSpeakers: event.target.checked }));

    }
    OnHasProjectorChange(event) {

        this.props.dispatch(meetingRoomActions.ChangeMeetingRoom({ HasProjector: event.target.checked }));

    }


    SaveMeetingRoom() {

        let { Code, Floor, MaxSeatsCount } = this.props.CurrentMeetingRoom;

        if (!(Code && Code.trim()))
            return swal("Warning", "Code must be provided", "warning");

        if (!(Floor && Number.isInteger(+Floor)))
            return swal("Warning", "Floor number must be provided as valid number", "warning");

        if (!(MaxSeatsCount && Number.isInteger(+MaxSeatsCount)))
            return swal("Warning", "Max seats count must be provided as valid number", "warning");


        this.props.dispatch(Actions.CreateMeetingRoom(this.props.CurrentMeetingRoom));

    }



    render() {

        if (this.props.CreatedMeetingRoom) {
            return <Redirect to="/meetingrooms" />
        }

        return (
            <fieldset disabled={this.props.IsLoading}>
                <div className="card bg-light">

                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title"><i className="fa fa-group"></i> Add Meeting Room</h5>
                            </div>
                            <div className="col">

                            </div>
                        </div>


                    </div>
                    <div className="card-body">
                        <div className="col">

                            <div className="row">

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="floor"  >Floor</label>
                                        <input id="floor" type="text" className="form-control" value={this.props.CurrentMeetingRoom.Floor} onChange={this.OnFloorChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="max_seats"  >Max Seats</label>
                                        <input id="max_seats" type="text" value={this.props.CurrentMeetingRoom.MaxSeatsCount} onChange={this.OnMaxSeatsChange} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="code"  >Code</label>
                                        <input id="code" type="text" className="form-control" value={this.props.CurrentMeetingRoom.Code} onChange={this.OnCodeChange} />
                                    </div>
                                    <div className="form-group mroom_ckbx_top" >
                                        <label htmlFor="has_speaker" className="form-check-label"> Has Speaker <input id="has_speaker" type="checkbox" className="form-check-inline" checked={this.props.CurrentMeetingRoom.HasSpeakers} onChange={this.OnHasSpeakerChange} /></label>
                                        <label htmlFor="has_monitor" className="form-check-label">Has Monitor  <input id="has_monitor" type="checkbox" className="form-check-inline" checked={this.props.CurrentMeetingRoom.HasMonitor} onChange={this.OnHasMonitorChange} /></label>
                                        <label htmlFor="has_projector" className="form-check-label">Has Projector <input id="has_projector" type="checkbox" className="form-check-inline" checked={this.props.CurrentMeetingRoom.HasProjector} onChange={this.OnHasProjectorChange} /></label>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="card-footer">
                        {
                            this.RenderMeetingRoomActions(this.props.MeetingRoom)
                        }
                    </div>

                </div>
            </fieldset>
        );
    }

    RenderMeetingRoomActions(meetingRoom) {

        if (this.props.CurrentMeetingRoom.ID) {
            return <button className="btn btn-sm btn-warning pull-right">Reserve  <i className="fa fa-bookmark"></i></button>
        }
        else {
            return (<button className="btn btn-sm btn-success pull-right" onClick={this.SaveMeetingRoom}>
                Save  {this.props.IsLoading ? <i className="fa fa-spin fa-spinner"></i> : <i className="fa fa-save"></i>}
            </button>);
        }

    }

    componentWillUnmount() {
        this.props.dispatch(Actions.DestroyCurrentMeetingRoom());
    }
}




export default connect(MappedStateToProps)(MeetingRoomComponent);