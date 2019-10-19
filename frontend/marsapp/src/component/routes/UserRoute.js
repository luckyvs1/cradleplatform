/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import auth from "../../actions/auth"

import {Route, Redirect} from "react-router-dom";


export const UserRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (true) { //TODO: revert to auth.isAuthenticated() before push
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};