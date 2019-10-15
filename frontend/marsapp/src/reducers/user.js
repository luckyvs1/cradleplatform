/**
 * Summary:
 *  For later use when we receive data. The reducer will take them.
 *  Help with easier fetching data from api
 */

import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

const initState = {
    //holds the data loging info? user info
    posts:[{userid:null}]
}

export default function user(state = initState, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            let newId = action.id
            // alter data
            console.log("USER LOGGERD IN" , newId)
            return {
                //spread the states in case of having multiple things inside of initState
                ...state,

                // override the data you want
                posts: newId
            };
        case USER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}