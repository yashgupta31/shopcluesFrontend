import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from 'redux-thunk'
import cartReducer from "../Reducers/cartReducer";

const rootReducer=combineReducers({
    cart: cartReducer
})

const store= legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;