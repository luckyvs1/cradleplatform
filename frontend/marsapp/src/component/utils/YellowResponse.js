import React from "react";
import {Alert, Col, Row} from "react-bootstrap"
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const YellowResponse = ({isUp}) => {
    return (
        <>
            <Alert id={'reading-response'}>
                <Row>
                    <Col>
                        <strong id={"warning-shift"}>Warning</strong>
                        <div id = {'triangle'} className={"text-center"}/>
                        <div className={"text-center"}>
                            {isUp ?
                                <FaArrowUp id={"arrow"}/> :
                                <FaArrowDown id={"arrow"}/>
                            }
                        </div>
                    </Col>
                </Row>
            </Alert>
        </>
    );
}

export default YellowResponse;
