
import { combineReducers } from "redux"
import { locationoneReducer } from "./location1"
import { locationtwoReducer } from "./location2"

import { locationthreeReducer } from "./location3"


export const allReducers = combineReducers({
    l1counter : locationoneReducer,
    l2counter : locationtwoReducer,
    l3counter : locationthreeReducer

})

