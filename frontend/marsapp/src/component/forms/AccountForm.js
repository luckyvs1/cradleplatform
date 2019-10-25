/**
 * Class: AccountForm
 * Summary:
 *  Contains the contents and functionality of the Account page.
 */

import React  from "react";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    Modal
} from 'react-bootstrap';
import PropTypes from "prop-types";
import api from "../../api"
import RegularPopUp from "../utils/popUp"
import {connect} from "react-redux";




class AccountForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                id: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                country: "",
                phoneNumber: "",
                role: "",
            },
            username:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let loggedInUser  = localStorage.getItem('loginUserId')
        if (!loggedInUser){
            //in case no idea has been added to browser storage hot fix for now
            loggedInUser = 1;
        }

        api.userInfo.getUserInfoById({userId: loggedInUser}).then(res => {
            let data  = res.data;
            this.setState({data})
        })
        api.user.getUserById(loggedInUser).then(user=>{
            this.setState({username:user.data.username})
        })
    }

    handleChange(event) {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        });
    }

    submit = event => {
        if (event) {
            this.props.submit(event)
        }
    };


    render() {
        console.log(this.props)


        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Account</h1>
                            <hr></hr>
                        </Col>
                    </Row>
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
                                        value={this.state.username}
                                        onChange={this.handleChange}
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
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.data.firstName}
                                        onChange={this.handleChange}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.data.lastName}
                                        onChange={this.handleChange}

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
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={this.state.data.phoneNumber}
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="role"
                                        name="role"
                                        placeholder="Role"
                                        value={this.state.data.role}
                                        onChange={this.handleChange}

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
                              <RegularPopUp></RegularPopUp>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // function name
    }
}



AccountForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);