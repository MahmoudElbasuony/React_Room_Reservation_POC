import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./reseravtions.component.min.css";
import Actions from "../../../redux/actions/reservations.Actions";
import swal from "sweetalert2";

const MappedStateToProps = (state) => {
    return {
        Reservations: state.Reservation.Reservations
    };
};

class ReservationsComponent extends Component {




    componentDidMount() {

        const { meetingRoomCode } = this.props.match.params;

        if (meetingRoomCode)
            this.props.dispatch(Actions.FetchReservations(meetingRoomCode));

    }

    CancelReservation(reservationId) {

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'

        }).then((result) => {

            if (result.value) {

                this.props.dispatch(Actions.DeleteReservation(reservationId));

            }

        });

    }

    ApproveReservation(isApprove, reservationId) {
        this.props.dispatch(Actions.ApproveReservation(isApprove, reservationId));
    }

    render() {


        const { meetingRoomCode } = this.props.match.params;

        return (
            <div className="jumbotron">
                <div className="card bg-light">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title"><i className="fa fa-download"></i> Meeting Room [ Code :  {meetingRoomCode} ] Reservations </h5>
                            </div>
                            <div className="col">
                                <Link className="btn btn-warning btn-sm pull-right" to={`/reservations/${meetingRoomCode}/new`} >New Reservation</Link>
                            </div>
                        </div>


                    </div>
                    <div className="card-body">

                        <div className="row">
                            {this.RenderReservationsInTable(this.props.Reservations)}
                        </div>

                    </div>
                </div>
            </div>
        );
    }



    RenderReservationsInTable(Reservations) {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-dark table-striped ">
                    <thead className="text-center">
                        <tr>
                            <td>Reserver Name</td>
                            <td>Reserver Email</td>
                            <td>From Time</td>
                            <td>To Time</td>
                            <td>Purpose</td>
                            <td>Reservation Date</td>
                            <td>Is Approved</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (() => {

                                if (Reservations.length > 0)
                                    return Reservations.map((reservation) => this.RenderReservationInTable(reservation));

                                return (
                                    <tr className="text-center bg-secondary">
                                        <td colSpan="7">No Reservations Found</td>
                                    </tr>
                                );

                            })()


                        }
                    </tbody>
                </table>
            </div>
        );
    }

    RenderReservationInTable(reservation) {


        return (
            <tr className="text-center" key={reservation.ID} >
                <td>
                    {reservation.ReserverName}
                </td>
                <td>
                    {reservation.ReserverEmail}
                </td>

                <td>
                    {new Date(reservation.FromTimeStamp).toLocaleTimeString()}
                </td>
                <td>
                    {new Date(reservation.ToTimeStamp).toLocaleTimeString()}
                </td>

                <td>
                    {reservation.Purpose}
                </td>
                <td>
                    {new Date(reservation.ReservationDate).toLocaleDateString()}
                </td>
                <td >
                    <input type="checkbox" className="form-check-inline" checked={reservation.IsApproved} onChange={() => { }} />
                </td>
                <td>
                    <div className="btn-group">
                        {
                            (() => {
                                if (reservation.IsApproved) {
                                    return <button className="btn btn-sm btn-warning" onClick={() => this.ApproveReservation(false, reservation.ID)}>Disapprove <i className="fa fa-minus"></i></button>
                                }
                                else {
                                    return <button className="btn btn-sm btn-success" onClick={() => this.ApproveReservation(true, reservation.ID)}>Approve <i className="fa fa-plus"></i></button>
                                }
                            })()
                        }
                        <button className="btn btn-sm btn-danger" onClick={() => this.CancelReservation(reservation.ID)}>Cancel <i className="fa fa-remove"></i></button>

                    </div>

                </td>
            </tr>
        );
    }



}




export default connect(MappedStateToProps)(ReservationsComponent);