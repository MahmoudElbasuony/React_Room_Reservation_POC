import { combineReducers } from "redux";
import MeetingRoomsReducer from "./meeting-rooms-reducer";

export default combineReducers({
    MeetingRooms: MeetingRoomsReducer
});