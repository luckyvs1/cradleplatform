/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import HCW from "../../actions/authHCW"

import {Route, Redirect} from "react-router-dom";


export const HCWRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (HCW.isAuthenticated()) {
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