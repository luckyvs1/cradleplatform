import * as React from "react";
import {withRouter} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import api from "../../api";

class TransferVHTForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstvht: null,
                secondvht: null,
            },
            userInfo: [{
                id: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                country: "",
                phoneNumber: "",
                role: "",
            }],

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

    componentDidMount() {
        api.userInfo.getAllUserInfo(null).then(res => {
            // get user information
            const data = res.data;
            this.setState(
                {
                    ...this.state,
                    userInfo: data

                })
        })

    }

    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>
                                <h2>Transfer From</h2>
                            </Form.Label>
                            <Form.Control
                                size={'lg'}
                                as="select"
                                id="firstvht"
                                name="firstvht"
                                placeholder={"VHT id"}
                                onChange={this.handleChange}
                                value={this.state.data.vhtId1}
                            >
                                {this.state.userInfo.map(item => {
                                    {
                                        return item.role == "VHT" ?
                                            <option value={item.id}> {item.firstName} {item.lastName}</option>
                                            : null
                                    }
                                })}
                            </Form.Control>
                        </Col>
                        <Col className={"text-center"} style={{top: '23px'}}>
                            <Form.Label>
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
                                as="select"
                                id="secondvht"
                                name="secondvht"
                                placeholder={"VHT id"}
                                onChange={this.handleChange}
                                value={this.state.data.vhtId2}
                            >
                                {this.state.userInfo.map(item => {
                                    {
                                        return item.role == "VHT" ?
                                            <option value={item.id}> {item.firstName} {item.lastName}</option>
                                            : null
                                    }
                                })}
                            </Form.Control>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default withRouter(TransferVHTForm);