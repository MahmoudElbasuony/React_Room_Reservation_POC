import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./reseravtion.component.min.css";
import swal from "sweetalert2";
import ReservationActions from '../../../redux/actions/reservations.Actions';
import DateTimePicker from 'react-datetime-picker';


const MappedStateToProps = (state) => {
    return {
        ReservationIsLoading: state.Reservation.ReservationIsLoading,
        CurrentReservation: state.Reservation.CurrentReservation,
        IsMeetingRoomReserved: state.Reservation.IsMeetingRoomReserved
    };
};

class ReservationComponent extends Component {


    constructor() {

        super();

        this.Reserve = this.Reserve.bind(this);
        this.OnReserverEmailChange = this.OnReserverEmailChange.bind(this);
        this.OnReserverNameChange = this.OnReserverNameChange.bind(this);
        this.OnFromTimeChange = this.OnFromTimeChange.bind(this);
        this.OnToTimeChange = this.OnToTimeChange.bind(this);
        this.OnPurposeChange = this.OnPurposeChange.bind(this);

    }

    componentDidMount() {

        const { meetingRoomCode } = this.props.match.params;

        this.props.dispatch(ReservationActions.ChangeReservation({ MeetingRoomCode: meetingRoomCode }));


    }


    Reserve() {

        let { ReserverName, ReserverEmail, FromTimeStamp, ToTimeStamp, Purpose } = this.props.CurrentReservation;

        if (!(ReserverName && ReserverName.trim()))
            return swal("Warning", "Reserver Name must be provided", "warning");

        if (!(ReserverEmail))
            return swal("Warning", "Reserver Email must be provided", "warning");

        if (!(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(ReserverEmail)))
            return swal("Warning", "Reserver Email is invalid", "warning");

        if (!(Purpose))
            return swal("Warning", "Purpose must be provided", "warning");

        if (!(FromTimeStamp))
            return swal("Warning", "From Time must be provided as valid time", "warning");

        if (!(ToTimeStamp))
            return swal("Warning", "To Time must be provided as valid time", "warning");


        this.props.dispatch(ReservationActions.CreateReservation(this.props.CurrentReservation));
    }

    OnReserverNameChange(event) {
        this.props.dispatch(ReservationActions.ChangeReservation({ ReserverName: event.target.value }));
    }
    OnReserverEmailChange(event) {
        this.props.dispatch(ReservationActions.ChangeReservation({ ReserverEmail: event.target.value }));
    }
    OnPurposeChange(event) {
        this.props.dispatch(ReservationActions.ChangeReservation({ Purpose: event.target.value }));
    }
    OnFromTimeChange(time) {
        this.props.dispatch(ReservationActions.ChangeReservation({ FromTimeStamp: time }));

    }

    OnToTimeChange(time) {
        this.props.dispatch(ReservationActions.ChangeReservation({ ToTimeStamp: time }));
    }



    render() {

        const { meetingRoomCode } = this.props.match.params;

        if (this.props.IsMeetingRoomReserved) {
            return <Redirect to={`/reservations/${meetingRoomCode}`} />
        }

        let { CurrentReservation } = this.props;

        return (
            <fieldset disabled={this.props.ReservationIsLoading}>

                <div className="card bg-light">

                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title"><i className="fa fa-group"></i> Add Reservation For Room [{meetingRoomCode}]</h5>
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
                                        <label htmlFor="reserver_name"  >Reserver Name</label>
                                        <input id="reserver_name" type="text" className="form-control" value={CurrentReservation.ReserverName} onChange={this.OnReserverNameChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="reserver_mail"  >Reserver Email</label>
                                        <input id="reserver_mail" type="text" className="form-control" value={CurrentReservation.ReserverEmail} onChange={this.OnReserverEmailChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="from_time"  >From Time</label>
                                        <DateTimePicker className="form-control" onChange={this.OnFromTimeChange} value={CurrentReservation.FromTimeStamp} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="to_time"  >To Time</label>
                                        <DateTimePicker className="form-control" onChange={this.OnToTimeChange} value={CurrentReservation.ToTimeStamp} />
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="purpose"  >Purpose</label>
                                        <textarea id="purpose" rows="10" placeholder="Purpose" className="form-control" value={CurrentReservation.Purpose} onChange={this.OnPurposeChange}></textarea>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-sm btn-success pull-right" onClick={this.Reserve}>
                                    Reserve  {this.props.ReservationIsLoading ? <i className="fa fa-spin fa-spinner"></i> : <i className="fa fa-save"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




            </fieldset >
        );
    }


    componentWillUnmount() {
        this.props.dispatch(ReservationActions.DestroyCurrentReservation());
    }



}




export default connect(MappedStateToProps)(ReservationComponent);