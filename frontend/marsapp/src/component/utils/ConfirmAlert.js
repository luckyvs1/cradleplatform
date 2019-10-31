
import React, {useState} from "react";
import {Alert , Button} from "react-bootstrap"



const ConfirmAlert = ({show  , message}) => {


    return (
        <>
            <Alert id={'success-alert'} show={show} variant="success">
                <Alert.Heading>Success</Alert.Heading>
                <p>
                    {message}
                </p>
                <hr />
            </Alert>

        </>
    );
}

export default ConfirmAlert;
