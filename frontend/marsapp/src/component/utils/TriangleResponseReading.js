import React, {useState} from "react";
import {Alert, Button, Col, Row} from "react-bootstrap"
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import {FaArrowUp, FaArrowDown} from "react-icons/all";

const TriangleResponseReading = ({show, message, isUp}) => {
    return (
        <>
            <Alert id={'reading-response'} show={show} variant="warning">
                <Alert.Heading>Attention</Alert.Heading>
                <Row>
                    <Col>
                        {isUp ?
                            "Raised Blood Pressure":
                            "Low Blood Pressure"
                        }
                        <p>
                            {message}
                        </p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Triangle width={75} height={75} fill={{color: '#ffff00'}}/>
                        {isUp ?
                            <FaArrowUp id={"arrow"}></FaArrowUp> :
                            <FaArrowDown id={"arrow"}></FaArrowDown>
                        }

                    </Col>
                </Row>
                <hr/>
            </Alert>

        </>
    );
}

export default TriangleResponseReading;
