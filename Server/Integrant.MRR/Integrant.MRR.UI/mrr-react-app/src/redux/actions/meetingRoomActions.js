import axios from "axios";
import { BaseApiUrl } from "../../url-helper";
import swal from "sweetalert2";
import { handleError } from "../../utils/error-handler";

export const MeetingRoomsActions = {
    // Fetched all meeting rooms 
    FetchAll: "FetchAll",
    // Creating meeting room done
    Create: "Create",
    // Flag indicated if operation done (eg: creating meeting room)
    IsLoading: "IsLoading",
    // Used to set current meeting room fields instantly when change input fields
    ChangeCurrentMeetingRoom: "MeetingRoomChange",
    // if component destroyed then reset form data
    DestroyCurrentMeetingRoom: "DestroyCurrentMeetingRoom",
    // used to indicate meeting room is deleted then update meeting rooms collection by removing the deleted one from it
    DeletedMeetingRoom: "DeletedMeetingRoom",
    // Separted flag similar to Create Action but used 
    // in different situation Indicated that the meeting room created successfully 
    IsMeetingRoomCreated: "IsMeetingRoomCreated",

    // switch meeting rooms view from grid view to table view and vice versa
    SwitchItemsFlow: "SwitchItemsFlow"
}

export default {


    // Fetch all meeting rooms 
    FetchMeetingRooms: () => {

        return (dispatch) => {

            axios.get(`${BaseApiUrl}/MeetingRooms`).then((resp) => {

                let MeetingRooms = resp.data;

                dispatch({
                    type: MeetingRoomsActions.FetchAll,
                    MeetingRooms
                });


            }, (error) => {

                handleError(error);

            });


        };


    },

    // delete meeting room with id
    DeleteMeetingRoom: (Id) => {

        return (dispatch) => {

            dispatch({
                type: MeetingRoomsActions.IsLoading,
                IsLoading: true
            });

            axios.delete(`${BaseApiUrl}/MeetingRooms/${Id}`).then((resp) => {

                dispatch({
                    type: MeetingRoomsActions.DeletedMeetingRoom,
                    Id
                });

                swal("Success", "Meeting room deleted successfully", "success");

            }, (error) => {

                handleError(error);

                dispatch({
                    type: MeetingRoomsActions.IsLoading,
                    IsLoading: false
                });

            });


        };

    },

    // create new meeting room 
    CreateMeetingRoom: (meetingRoom) => {

        return (dispatch) => {

            dispatch({
                type: MeetingRoomsActions.IsLoading,
                IsLoading: true
            });

            axios.post(`${BaseApiUrl}/MeetingRooms`, meetingRoom).then((resp) => {


                let CurrentMeetingRoom = resp.data;

                dispatch({
                    type: MeetingRoomsActions.Create,
                    CurrentMeetingRoom,
                    CreatedMeetingRoom: true,
                    IsLoading: true
                });


                swal("Success", "Meeting room created successfully", "success").then(() => {

                    dispatch({
                        type: MeetingRoomsActions.IsMeetingRoomCreated
                    });

                });

            }, (error) => {

                handleError(error);

                dispatch({
                    type: MeetingRoomsActions.IsLoading,
                    IsLoading: false
                });

            });


        };
    },

    // reset form state when navigating away 
    DestroyCurrentMeetingRoom: () => {
        return {
            type: MeetingRoomsActions.DestroyCurrentMeetingRoom,
            CurrentMeetingRoom: {
                ID: '',
                Floor: '',
                Code: '',
                MaxSeatsCount: '',
                HasMonitor: false,
                HasSpeakers: false,
                HasProjector: false
            }
        };
    },

    ChangeMeetingRoom: (meetingRoom) => {
        return {
            type: MeetingRoomsActions.ChangeCurrentMeetingRoom,
            CurrentMeetingRoom: meetingRoom
        };
    },

    SwitchItemsFlow: () => {
        return {
            type: MeetingRoomsActions.SwitchItemsFlow 
        };
    }
}