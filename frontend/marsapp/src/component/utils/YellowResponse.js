import React from "react";
import {Alert, Col, Row} from "react-bootstrap"
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const YellowResponse = ({isUp}) => {
    return (
        <>
            <Alert id={'reading-response'}>
                <Row>
                    <Col>
                        <strong>Warning</strong>
                        <div id = {'triangle'}/>
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

export default YellowResponse;
