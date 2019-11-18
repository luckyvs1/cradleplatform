import React from "react";
import {Alert, Col, Row} from "react-bootstrap"

const AdviceBox = ({show  , briefAdvice , adviceDetails ,communityAdvice
                       ,communityTreatment
                       ,hospitalAdvice
                       ,hospitalTreatment
                       ,condition
                       ,advice
                       ,analysis}) => {
    return (
        <>
            <Alert id={'advice-response'} show={show} variant="info">
                <Alert.Heading>Advice</Alert.Heading>
                <Row>
                    <Col>
                        <p>
                            {briefAdvice?briefAdvice:null}
                        </p>
                        {analysis ?
                            <p>{"Analysis : \n"}
                                {analysis}
                            </p>
                            :null
                        }
                        {advice ?
                            <p>{"Advice : \n"}
                                {advice}
                            </p>
                            :null
                        }
                        {adviceDetails ?
                            <p>{"Advice Detail : \n"}
                                {adviceDetails}
                            </p>
                            :null
                        }
                        {communityAdvice ?
                            <p>{"Community Advice : \n"}
                                {communityAdvice}
                            </p>
                            :null
                        }
                        {communityTreatment ?
                            <p>{"Community Treatment : \n"}
                                {communityTreatment}
                            </p>
                            :null
                        }
                        {hospitalAdvice ?
                            <p>{"Hospital Advice : \n"}
                                {hospitalAdvice}
                            </p>
                            :null
                        }
                        {hospitalTreatment ?
                            <p>{"Hospital Treatment : \n"}
                                {hospitalTreatment}
                            </p>
                            :null
                        }
                        {condition ?
                            <p>{"Condition : \n"}
                                {condition}
                            </p>
                            :null
                        }
                    </Col>
                </Row>
                <hr />
            </Alert>
        </>
    );
}

export default AdviceBox;
