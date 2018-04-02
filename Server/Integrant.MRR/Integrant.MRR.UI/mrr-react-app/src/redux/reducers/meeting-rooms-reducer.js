import { MeetingRoomsActions } from "../actions/meetingRoomActions";


const InitialMeetingRoomState = {
    MeetingRooms: [],
    CurrentMeetingRoom: {
        Floor: '',
        Code: '',
        MaxSeatsCount: '',
        HasMonitor: false,
        HasSpeakers: false,
        HasProjector: false
    },
    ItemsFlowGrid: true,
    IsLoading: false,
    CreatedMeetingRoom: false
};


export default function MeetingRoomsReducer(state = InitialMeetingRoomState, action) {


    switch (action.type) {

        case MeetingRoomsActions.FetchAll:
            state = { ...state, MeetingRooms: action.MeetingRooms }
            break;


        case MeetingRoomsActions.Create:
        case MeetingRoomsActions.DestroyCurrentMeetingRoom:
            state = {
                ...state, MeetingRooms: [...state.MeetingRooms, action.CurrentMeetingRoom],
                CurrentMeetingRoom: action.CurrentMeetingRoom, IsLoading: false, CreatedMeetingRoom: false
            }
            break;



        case MeetingRoomsActions.CreatedMeetingRoom:
            state = { ...state, CreatedMeetingRoom: true }
            break;

        case MeetingRoomsActions.DeletedMeetingRoom:

            const DeletedMeetingRoomIndx = state.MeetingRooms.findIndex((mr) => mr.ID === action.Id);

            if (DeletedMeetingRoomIndx >= 0) {

                state.MeetingRooms.splice(DeletedMeetingRoomIndx, 1);

                let MeetingRooms = [...state.MeetingRooms];

                state = { ...state, MeetingRooms, IsLoading: false };

            }

            break;


        case MeetingRoomsActions.ChangeCurrentMeetingRoom:

            state = { ...state, CurrentMeetingRoom: { ...state.CurrentMeetingRoom, ...action.CurrentMeetingRoom } };

            break;

        case MeetingRoomsActions.SwitchItemsFlow:

            state = { ...state, ItemsFlowGrid: !state.ItemsFlowGrid };
            
            break;

        default: break;
    }

    return state;
}