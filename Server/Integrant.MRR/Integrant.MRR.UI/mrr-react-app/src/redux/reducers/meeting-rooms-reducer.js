import { MeetingRoomsActions } from "../actions/meetingRoomActions";

export default function MeetingRoomsReducer(state = [], action) {


    switch (action.type) {
        case MeetingRoomsActions.FetchAll:
            state = [...action.MeetingRooms]
            break;
        default: break;
    }

    return state;
}