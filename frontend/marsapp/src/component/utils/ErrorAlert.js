
import React, {useState} from "react";
import {Alert , Button} from "react-bootstrap"



const ErrorAlert = ({show  , message}) => {


    return (
        <>
            <Alert id={'error-alert'} show={show} variant="danger">
                <Alert.Heading>Error !</Alert.Heading>
                <p>
                    {message}
                </p>
                <hr />
            </Alert>

        </>
    );
}

export default ErrorAlert;
