import axios from "axios";
import { BaseApiUrl } from "../../url-helper";
import swal from "sweetalert2";
import { handleError } from "../../utils/error-handler";



export const ReservationActions = {
    FetchAllReservations: "FetchAllReservations",
    ReservationIsLoading: "ReservationIsLoading",
    CurrentReservation: "CurrentReservation",
    IsMeetingRoomReserved: "IsMeetingRoomReserved",
    CreateReservation: "CreateReservation",
    ChangeCurrentReservation: "ChangeCurrentReservation",
    DestroyCurrentReservation: "DestroyCurrentReservation",
    DeleteReservation: "DeleteReservation",
    Approve: "Approve"
}


export default {
    // Fetch all meeting rooms 
    FetchReservations: (MeetingRoomCode) => {


        return (dispatch) => {

            axios.get(`${BaseApiUrl}/Reservation/${MeetingRoomCode}`).then((resp) => {

                let Reservations = resp.data;

                dispatch({
                    type: ReservationActions.FetchAllReservations,
                    Reservations
                });


            }, (error) => {

                handleError(error);

            });


        };


    },

    // create new meeting room 
    CreateReservation: (reservation) => {

        return (dispatch) => {

            dispatch({
                type: ReservationActions.ReservationIsLoading,
                ReservationIsLoading: true
            });

            reservation.ReservationDate = new Date().toLocaleString();

            axios.post(`${BaseApiUrl}/Reservation`, {...reservation, FromTimeStamp : reservation.FromTimeStamp.toLocaleString() , ToTimeStamp : reservation.ToTimeStamp.toLocaleString()}).then((resp) => {

                resp.data.ToTimeStamp = new Date(resp.data.ToTimeStamp);
                resp.data.FromTimeStamp = new Date(resp.data.FromTimeStamp);

                let CurrentReservation = resp.data;

                dispatch({
                    type: ReservationActions.CreateReservation,
                    CurrentReservation,
                    ReservationIsLoading: true
                });


                swal("Success", "Meeting room reserved successfully", "success").then(() => {

                    dispatch({
                        type: ReservationActions.IsMeetingRoomReserved,
                        IsMeetingRoomReserved: true,
                        ReservationIsLoading: false
                    });

                });

            }, (error) => {

                handleError(error);

                dispatch({
                    type: ReservationActions.ReservationIsLoading,
                    ReservationIsLoading: false
                });

            });


        };
    },

    ChangeReservation: (reservation) => {
        return {
            type: ReservationActions.ChangeCurrentReservation,
            CurrentReservation: reservation
        };
    },
    // reset form state when navigating away 
    DestroyCurrentReservation: () => {
        return {
            type: ReservationActions.DestroyCurrentReservation,
            CurrentReservation: {
                ID: '',
                MeetingRoomCode: '',
                FromTimeStamp: new Date(),
                ToTimeStamp:  new Date(),
                ReserverEmail: '',
                ReserverName: '',
                Purpose: '',
                ReservationDate: '',
                IsApproved: false
            }
        };
    },

    DeleteReservation: (reservationId) => {

        return (dispatch) => {

            axios.delete(`${BaseApiUrl}/Reservation/${reservationId}`).then((resp) => {

                dispatch({
                    type: ReservationActions.DeleteReservation,
                    Id: reservationId
                });

                swal("Success", "Reservation deleted successfully", "success");

            }, (error) => {

                handleError(error);



            });


        };
    },

    ApproveReservation: (IsApprove, Id) => {

        return (dispatch) => {

            axios.put(`${BaseApiUrl}/Reservation/${Id}/${IsApprove}`).then((resp) => {

                const { IsApproved } = resp.data;

                dispatch({
                    type: ReservationActions.Approve,
                    IsApproved,
                    Id
                });

                if (IsApproved)
                    swal("Success", "Reservation approved successfully", "success");
                else
                    swal("Success", "Reservation disapproved successfully", "success");


            }, (error) => {

                handleError(error);

            });


        };
    }
}