import { combineReducers } from "redux"
import readucer from "../Reducer/reducer"
import readucer_price from "../Reducer/price_reducer"
const main_readucer = combineReducers({
    readucer,readucer_price
})

export default main_readucer