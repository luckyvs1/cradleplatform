/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import VHT from "../../actions/authVHT"

import {Route, Redirect} from "react-router-dom";


export const VHTRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (VHT.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/homePage",
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