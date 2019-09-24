import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>     console.log("update information (login)");

// api.user.login(credentials).then(user => {
//         localStorage.bookwormJWT = user.token;
//         setAuthorizationHeader(user.token);
//         dispatch(userLoggedIn(user));
//     });

export const logout = () => dispatch => {console.log("update information (signup)");
    // localStorage.removeItem("bookwormJWT");
    // setAuthorizationHeader();
    // dispatch(userLoggedOut());
};

export const confirm = token => dispatch => console.log("update information (confirm)");
    // api.user.confirm(token).then(user => {
    //     localStorage.bookwormJWT = user.token;
    //     dispatch(userLoggedIn(user));
    // });

export const resetPasswordRequest = ({ email }) => () => console.log("update information (reset)");
    // api.user.resetPasswordRequest(email);

export const validateToken = token => () => console.log("update information (validate)");
    // api.user.validateToken(token);

export const resetPassword = data => () => console.log("update information (reset)");
    // api.user.resetPassword(data);