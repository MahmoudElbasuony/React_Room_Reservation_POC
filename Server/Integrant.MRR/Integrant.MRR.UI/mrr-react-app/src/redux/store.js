import { createStore } from "redux";
import Reducers from "./reducers/reducers";

let MockData = {
    MeetingRooms: [
        {
            Code: '123',
            Floor: 1,
            MaxSeatsCount: '12',
            HasSpeakers: true,
            HasMonitor: true,
            HasProjector: true
        }
    ]
}

const store = createStore(Reducers, MockData);

export default store;




