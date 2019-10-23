import {Button, Col, Container, Form, Row} from "react-bootstrap";
import api from "../../api";
import React from "react";
import Popup from "reactjs-popup";

export class popUp extends React.Component {


    onChange = e => {

        console.log(e);
    }

    state = {
        data: {
            username: '',
            password: '',
            confirm_password: '',
        }
    };

    render() {

        return (
            <Popup
                trigger={<Button variant="success" onClick={() => this.submit(this.state.data)}>
                    Create
                </Button>}
                modal
                closeOnDocumentClick
            >{close => (
                <Container className={"text-left"}>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="enter something secure"
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="conf_password"
                                        name="conf_password"
                                        placeholder="Confirm Password"
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className={"text-right"}>
                                <Button
                                    className="button"
                                    onClick={() => {
                                        let data = {
                                            id: "1",
                                            username: "test",
                                            password: "test",
                                        }

                                        api.user.createUser(data).then(res => {
                                            console.log(res);
                                        })
                                    }}
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Container>
            )}
            </Popup>
        )
    }
}