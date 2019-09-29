import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";
import api from "../api";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => {
    console.log(credentials)
    // api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))
    api.user.mockPatients().then(user => dispatch(userLoggedIn(user)))
};

// api.user.login().then(user => {
//     });

export const logout = () => dispatch => {
    console.log("update information (signup)");
};

export const confirm = token => dispatch => console.log("update information (confirm)");

export const resetPasswordRequest = ({email}) => () => console.log("update information (reset)");

export const validateToken = token => () => console.log("update information (validate)");

export const testAPICALL = data => () => console.log("update information (reset)");
api.user.hello();