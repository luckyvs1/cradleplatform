import React, {useState} from "react";
import {Alert, Button, Col, Row} from "react-bootstrap"
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import {FaArrowDown, FaArrowUp} from "react-icons/all";
const StopSignResponseReading = ({show  , message ,isUp}) => {
    return (
        <>
            <Alert id={'reading-response'} show={show} variant="danger">
                <Alert.Heading>U gonna die bai</Alert.Heading>
                <Row>
                    <Col>
                        <p>
                            {message}
                        </p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Polyline points='50,50 50,75 75,100 100,100 125,75 125,50 100,25 75,25' fill={{color:'#FF0000'}} />
                        {isUp?
                            <FaArrowUp id={"arrow"}></FaArrowUp> :
                            <FaArrowDown id={"arrow"}></FaArrowDown>
                        }

                    </Col>
                </Row>
                <hr />
            </Alert>
        </>
    );
}

export default StopSignResponseReading;
