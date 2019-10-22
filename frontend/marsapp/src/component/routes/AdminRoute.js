/**
 * Summary:
 *  Handles routing for any logged in users
 */

import React from "react";
import AuthAdmin from "../../actions/authAdmin"

import {Route, Redirect} from "react-router-dom";


export const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (AuthAdmin.isAuthenticated()) {
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