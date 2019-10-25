/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import auth from "../../actions/auth"

import {Redirect, Route} from "react-router-dom";


export const UserRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
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