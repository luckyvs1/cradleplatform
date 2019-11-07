import React from "react";
import {Alert, Col, Row} from "react-bootstrap"

const GreenResponse = () => {
    return (
        <>
            <Alert id={'reading-response'}>
                <Row>
                    <Col>
                        <strong>OK</strong>
                        <div id={'circle'}/>
                    </Col>
                </Row>
            </Alert>
        </>
    );
}

export default GreenResponse;
