import * as React from "react";
import {withRouter} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class TransferVHTForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstvht:null,
                secondvht:null,
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        });
    }

    submit = event => {
        if (event) {
            this.props.submit(this.state.data)
        }
    };


    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label >
                                <h2>Transfer From</h2>
                            </Form.Label>
                            <Form.Control
                                size={'lg'}
                                type="text"
                                id="firstvht"
                                name="firstvht"
                                placeholder={"VHT id"}
                                onChange={this.handleChange}
                                value={this.state.data.vhtId1}
                            />
                        </Col>
                        <Col className={"text-center"} style={{top:'23px'}}>
                            <Form.Label >
                                <h2></h2>
                            </Form.Label>
                            <Button variant="primary" size="lg" block onClick={this.submit}>
                                <i className="fas fa-exchange-alt"></i>
                                {'\t\t'}Transfer Data
                            </Button>
                        </Col>
                        <Col>
                            <Form.Label>
                                <h2>Transfer To</h2>
                            </Form.Label>
                            <Form.Control
                                size={'lg'}
                                type="text"
                                id="secondvht"
                                name="secondvht"
                                placeholder={"VHT id"}
                                onChange={this.handleChange}
                                value={this.state.data.vhtId2}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(TransferVHTForm);