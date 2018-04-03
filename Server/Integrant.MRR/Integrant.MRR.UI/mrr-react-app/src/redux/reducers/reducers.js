import { combineReducers } from "redux";
import MeetingRoomsReducer from "./meeting-rooms-reducer";
import ReservationReducer from "./reservations.reducer";

export default combineReducers({
    MeetingRooms: MeetingRoomsReducer,
    Reservation : ReservationReducer
});