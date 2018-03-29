import { createStore } from "redux";
import Reducers from "./reducers/reducers";

let MockData = {
    MeetingRooms: [
        {
            Code: '123',
            Floor: 1,
            MaxSeatsCount: '12',
            HasSpeakers: false,
            HasMonitor: true,
            HasProjector: false
        },
        {
            Code: '456',
            Floor: 1,
            MaxSeatsCount: '12',
            HasSpeakers: false,
            HasMonitor: true,
            HasProjector: false
        }
    ]
}

const store = createStore(Reducers, MockData);

export default store;




