import React, {useState} from "react";
import {Alert, Button, Col, Row} from "react-bootstrap"
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import {FaArrowAltCircleUp , FaArrowAltCircleDown} from "react-icons/all";

const GreenResponseReading = ({show  , message}) => {
    return (
        <>
            <Alert id={'reading-response'} show={show} variant="success">
                <Alert.Heading>Success</Alert.Heading>
                <Row>
                    <Col>
                        <p>
                            {message}
                        </p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Circle r={30} fill={{color:'#80ff00'}} />


                    </Col>
                </Row>
                <hr />
            </Alert>
        </>
    );
}

export default GreenResponseReading;
