import * as React from "react";
import {withRouter} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class TransferVHTForm extends React.Component {
    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>From VHT Id</Form.Label>
                            <Form.Control
                                type="text"
                                id="firstvht"
                                name="firstvht"
                                // value={this.state.data.patientId}
                            />
                        </Col>
                        <Col>
                            <Button>Transfer</Button>
                        </Col>
                        <Col>
                            <Form.Label>To VHT Id</Form.Label>
                            <Form.Control
                                type="text"
                                id="secondvht"
                                name="secondvht"
                                // value={this.state.data.patientId}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(TransferVHTForm);