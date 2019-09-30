/**
 * Summary:
 *  For later use when we receive data. The reducer will take them.
 *  Help with easier fetching data from api
 */

import { combineReducers } from "redux";

import user from "./reducers/user";

export default combineReducers({
    user,
});