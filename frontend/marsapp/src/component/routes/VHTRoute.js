/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import VHT from "../../actions/authVHT"

import {Redirect, Route} from "react-router-dom";
import HCW from "../../actions/authHCW";
import auth from "../../actions/auth";


export const VHTRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (VHT.isAuthenticated() || HCW.isAuthenticated()  || auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: props.history.goBack(),
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