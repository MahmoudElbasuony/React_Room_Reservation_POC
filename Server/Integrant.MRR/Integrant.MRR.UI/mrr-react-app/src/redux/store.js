import { createStore } from "redux";
import Reducers from "./reducers/reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";


const Middlewares = applyMiddleware(thunk);

const store = createStore(Reducers, Middlewares);



export default store;




