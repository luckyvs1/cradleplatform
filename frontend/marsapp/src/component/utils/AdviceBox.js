import React from "react";
import {Alert, Col, Row} from "react-bootstrap"

const AdviceBox = ({show  , briefAdvice , adviceDetails ,communityAdvice
                       ,communityTreatment
                       ,hospitalAdvice
                       ,hospitalTreatment }) => {
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
                        <p>
                            {communityAdvice}
                        </p>
                        <p>
                            {communityTreatment}
                        </p>
                        <p>
                            {hospitalAdvice}
                        </p>
                        <p>
                            {hospitalTreatment}
                        </p>
                    </Col>
                </Row>
                <hr />
            </Alert>
        </>
    );
}

export default AdviceBox;
