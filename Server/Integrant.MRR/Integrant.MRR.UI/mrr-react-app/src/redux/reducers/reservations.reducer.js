import { ReservationActions } from "../actions/reservations.Actions";


const InitialReservationState = {
    Reservations: [

    ],
    IsMeetingRoomReserved: false,
    ReservationIsLoading: false,
    CurrentReservation: {
        ID: '',
        MeetingRoomCode: '',
        FromTimeStamp: new Date(),
        ToTimeStamp: new Date(),
        ReserverEmail: '',
        ReserverName: '',
        Purpose: '',
        ReservationDate: '',
        IsApproved: false
    }
};



export default function ReservationReducer(state = InitialReservationState, action) {


    switch (action.type) {

        case ReservationActions.FetchAllReservations:
            state = { ...state, Reservations: action.Reservations }
            break;

        case ReservationActions.IsMeetingRoomReserved:
            state = { ...state, IsMeetingRoomReserved: action.IsMeetingRoomReserved, ReservationIsLoading: action.ReservationIsLoading }
            break;

        case ReservationActions.ReservationIsLoading:
            state = { ...state, ReservationIsLoading: action.ReservationIsLoading }
            break;

        case ReservationActions.CreateReservation:
            state = { ...state, CurrentReservation: action.CurrentReservation, ReservationIsLoading: action.ReservationIsLoading }
            break;

        case ReservationActions.ChangeCurrentReservation:
            state = { ...state, CurrentReservation: { ...state.CurrentReservation, ...action.CurrentReservation } }
            break;

        case ReservationActions.DestroyCurrentReservation:
            state = { ...state, CurrentReservation: action.CurrentReservation, IsMeetingRoomReserved: false, ReservationIsLoading: false }
            break;

        case ReservationActions.DeleteReservation:

            const DeletedReservationIndx = state.Reservations.findIndex((rs) => rs.ID === action.Id);

            if (DeletedReservationIndx >= 0) {

                state.Reservations.splice(DeletedReservationIndx, 1);

                let Reservations = [...state.Reservations];

                state = { ...state, Reservations };

            }
            break;


        case ReservationActions.Approve:

            const MatchedReservation = state.Reservations.find((rs) => rs.ID === action.Id);

            if (MatchedReservation) {

                MatchedReservation.IsApproved = action.IsApproved;

                let Reservations = [...state.Reservations];

                state = { ...state, Reservations };

            }
            break;

        default: break;

    }

    return state;
}