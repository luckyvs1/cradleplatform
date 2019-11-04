import React from "react";
import {Alert, Col, Row} from "react-bootstrap"

const AdviceBox = ({show  , briefAdvice , adviceDetails}) => {
    return (
        <>
            <Alert id={'advice-response'} show={show} variant="info">
                <Alert.Heading>Advice</Alert.Heading>
                <Row>
                    <Col>
                        <p>
                            {briefAdvice}
                        </p>
                        <p>
                            {adviceDetails}
                        </p>
                    </Col>
                </Row>
                <hr />
            </Alert>
        </>
    );
}

export default AdviceBox;
