import axios from "axios";
import { BaseApiUrl } from "../../url-helper";

export const MeetingRoomsActions = {
    FetchAll: "FetchAll"
}

export default {


    FetchMeetingRooms: () => {

        return (dispatch) => {

            axios.get(`${BaseApiUrl}/MeetingRooms`).then((resp) => {

                let MeetingRooms = resp.data;

                dispatch({
                    type: MeetingRoomsActions.FetchAll,
                    MeetingRooms
                });

            }, (error) => {

                console.error(error);

            });


        };


    }


}