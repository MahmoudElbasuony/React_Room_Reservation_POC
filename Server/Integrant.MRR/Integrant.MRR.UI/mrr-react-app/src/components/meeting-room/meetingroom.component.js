import React, { Component } from 'react';
import { connect } from "react-redux";
import "./meetingroom.component.min.css";

const MappedStateToProps = (state) => {
    return {};
};

class MeetingRoomComponent extends Component {


    constructor() {

        super();

        this.CurrentMeetingRoom = {};

    }

    componentWillMount() {

            

    }


    get IsView() {
        return this.props.MeetingRoom && true;
    }


    render() {
        return (
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title"><i className="fa fa-group"></i></h5>
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
                                    <input id="floor" type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="max_seats"  >Max Seats</label>
                                    <input id="max_seats" type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="code"  >Code</label>
                                    <input id="code" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="has_speaker" className="form-check-label"> Has Speaker <input id="has_speaker" type="checkbox" className="form-check-inline" /></label>
                                    <label htmlFor="has_monitor" className="form-check-label">Has Monitor  <input id="has_monitor" type="checkbox" className="form-check-inline" /></label>
                                    <label htmlFor="has_projector" className="form-check-label">Has Projector <input id="has_projector" type="checkbox" className="form-check-inline" /></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    {this.RenderMeetingRoomActions(this.props.MeetingRoom)}
                </div>
            </div>
        );
    }

    RenderMeetingRoomActions(meetingRoom) {

        if (this.IsView) {
            return <button className="btn btn-sm btn-warning pull-right">Reserve  <i className="fa fa-bookmark"></i></button>
        }
        else {
            return <button className="btn btn-sm btn-warning pull-right">Save  <i className="fa fa-bookmark"></i></button>
        }

    }
}




export default connect(MappedStateToProps)(MeetingRoomComponent);