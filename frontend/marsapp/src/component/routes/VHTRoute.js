/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import VHT from "../../actions/authVHT"

import {Redirect, Route} from "react-router-dom";


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