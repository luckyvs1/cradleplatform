import React from "react";
import {Alert, Col, Row} from "react-bootstrap"
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const RedResponse = ({isUp}) => {
    return (
        <>
            <Alert id={'reading-response'}>
                <Row>
                    <Col>
                        <strong>Urgent</strong>
                        <div id = {'octagon'}/>
                        {isUp ?
                            <FaArrowUp id={"arrow"}/> :
                            <FaArrowDown id={"arrow"}/>
                        }
                    </Col>
                </Row>
            </Alert>
        </>
    );
}

export default RedResponse;
