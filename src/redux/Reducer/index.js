import { cartitem, cartprice } from "./reducer";
import { combineReducers } from "redux";
const reducers = combineReducers(
    {
        cartitem, cartprice
    }
);

export default reducers;