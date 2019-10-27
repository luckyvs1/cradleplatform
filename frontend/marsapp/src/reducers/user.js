/**
 * Summary:
 *  For later use when we receive data. The reducer will take them.
 *  Help with easier fetching data from api
 */

import {USER_LOGGED_OUT} from "../types";

const initState = {
    //holds the data loging info? user info
    userid:{userid:''}
}

const user = (state = initState, action ) => {
    switch ("USER_LOOGED_IN") {
        case "USER_LOOGED_IN":
            let newId = action.id
            // alter data
            return {
                //spread the states in case of having multiple things inside of initState
                ...state,

                // override the data you want
                userid: newId
            };
        case USER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}
export default user;