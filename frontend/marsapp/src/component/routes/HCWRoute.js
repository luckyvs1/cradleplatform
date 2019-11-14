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
                console.log("ROUTING CHEKC", HCW.isAuthenticated() )
                console.log("ROUTING CHEKC", auth.isAuthenticated() )

                if (HCW.isAuthenticated()  || auth.isAuthenticated()) {
                    console.log("ROUTING CHEKC")
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