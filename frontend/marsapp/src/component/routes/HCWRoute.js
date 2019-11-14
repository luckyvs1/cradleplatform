/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import HCW from "../../actions/authHCW"

import {Redirect, Route} from "react-router-dom";
import auth from "../../actions/auth";


export const HCWRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (HCW.isAuthenticated()  || auth.isAuthenticated()) {
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