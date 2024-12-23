import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/user-slice.jsx";
import cartReducer from './features/Cart-Slice.jsx'
const rootreducer = combineReducers({
    user: userReducer,
    cart : cartReducer
})

export default rootreducer;