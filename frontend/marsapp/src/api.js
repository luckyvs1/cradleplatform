import axios from "axios";

export default {
    user: {
        login: credentials => console.log("Login has been called send data please"),
            // axios.post("/api/auth", { credentials }).then(res => res.data.user),
        signup: user =>console.log("Sign up has been called send data please"),
            // axios.post("/api/users", { user }).then(res => res.data.user),
        confirm: token =>
            console.log("CONFIRM?"),
            // axios
            //     .post("/api/auth/confirmation", { token })
            //     .then(res => res.data.user),
        resetPasswordRequest: email => console.log("reset password has been called"),
            // axios.post("/api/auth/reset_password_request", { email }),
        validateToken: token => console.log("valid token has been called"),
            // axios.post("/api/auth/validate_token", { token }),
        resetPassword: data => console.log("reset password has been called"),
        // axios.post("/api/auth/reset_password", { data })
    },

};