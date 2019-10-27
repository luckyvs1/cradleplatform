/**
 * Class: AddUsersForm
 * Summary:
 *  Contains the contents and functionality of the AddUser page.
 */

// TODO: Determine how to handle UserInfo, as the controllers don't permit uploading it alongside User.
// TODO: Currently commented out functional aspects

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import InlineError from "../messages/InlineError";
import api from "../../api"
import {
    withRouter
} from "react-router-dom";

class AddUsersForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userData: {
                username: "",   // required
                password: "",   // required
            },
            userInfoData: {
                firstName: "",
                lastName: "",
                dateOfBirth: null,
                country: "",
                phoneNumber: "",    // required
                email: "",          // required
                role: null          // required
            },
            password2: "",   // for re-entering password
            errors: {}
        };
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeUserInfo = this.onChangeUserInfo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUser = e => this.setState({
        userData: {
            ...this.state.userData,
            [e.target.name]: e.target.value
        }
    });

    onChangeUserInfo = e => this.setState({
        userInfoData: {
            ...this.state.userInfoData,
            [e.target.name]: e.target.value
        }
    });

    onChangePassword2 = e => this.setState({
        password2: e.target.value
    });

    onChangeDob = date => this.setState({
        userInfoData: {
            ...this.state.userInfoData,
            dateOfBirth: date
        }
    });

    onSubmit = (event) => {
        // TODO: Add a success message or toast when user is created

        const config = {
            headers: {
                accept : "application/json"
            }
        };

        event.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors}); //if there are errors returned, display them
        if(Object.keys(errors).length === 0){ //if no errors
            //this.props.submitUser(this.state.userData);
            //this.props.submitUserInfo(this.state.userInfoData);
            api.user.createUser(this.state.userData, config)
                .then(
                    this.props.history.push({
                        pathname: '/listUser'
                    })
                )
                .catch(error => {
                console.log("1 ", error.message);
            });
            // api.userInfo.createUserInfo(this.state.userInfoData, config).catch(error => {
            //     console.log("2 ", error.message);
            // });
        }
    };

    validate = (state) => {
        const errors = {};
        const emptyWarning = "Can't be blank";

        if(!state.userData.username) {
            errors.username = emptyWarning;
        }
        else if(state.userData.username.length < 6 || state.userData.username.length > 16 ) {
            errors.username = "Username needs to be between 6 - 16 characters.";
        }

        if(!state.userData.password) {
            errors.password = emptyWarning; // TODO: remove when password creation is done elsewhere
        }
        else if(state.userData.password.length < 8 || state.userData.username.password > 32 ) {
            errors.password = "Password needs to be between 8 - 32 characters.";
        }

        if(state.userData.password !== state.password2) {
            errors.password2 = "Password does not match";
        }
        // if(!state.userInfoData.role) errors.role = emptyWarning;
        return errors;
    };

    render() {
        const { userData, userInfoData, password2, errors } = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add User</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Username*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Enter here..."
                                            value={userData.username}
                                            onChange={this.onChangeUser}/>
                                        {errors.username && <InlineError text={errors.username}/>}
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        {/*TODO: remove and have user create password after validating email or phone number*/}
                                        <Form.Label>Password*</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Enter here..."
                                            value={userData.password}
                                            onChange={this.onChangeUser}/>
                                        {errors.password && <InlineError text={errors.password}/>}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        {/*TODO: remove and have user create password after validating email or phone number*/}
                                        <Form.Label>Re-enter Password*</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="password2"
                                            name="password2"
                                            placeholder="Enter here..."
                                            value={password2}
                                            onChange={this.onChangePassword2}/>
                                        {errors.password2 && <InlineError text={errors.password2}/>}
                                    </Form.Group>
                                </Form.Row>
                                {/*<Form.Row>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>First Name</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            id="firstName"*/}
                                {/*            name="firstName"*/}
                                {/*            placeholder="Enter here..."*/}
                                {/*            value={userInfoData.firstName}*/}
                                {/*            onChange={this.onChangeUserInfo}/>*/}
                                {/*        {errors.age && <InlineError text={errors.age}/>}*/}
                                {/*    </Form.Group>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>Last Name</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            id="lastName"*/}
                                {/*            name="lastName"*/}
                                {/*            placeholder="Enter here..."*/}
                                {/*            value={userInfoData.lastName}*/}
                                {/*            onChange={this.onChangeUserInfo}/>*/}
                                {/*    </Form.Group>*/}
                                {/*</Form.Row>*/}
                                {/*<Form.Row>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>E-mail</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            id="email"*/}
                                {/*            name="email"*/}
                                {/*            placeholder="Enter here..."*/}
                                {/*            value={userInfoData.email}*/}
                                {/*            onChange={this.onChangeUserInfo}/>*/}
                                {/*    </Form.Group>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>Phone Number</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            id="phoneNumber"*/}
                                {/*            name="phoneNumber"*/}
                                {/*            placeholder="Enter here..."*/}
                                {/*            value={userInfoData.phoneNumber}*/}
                                {/*            onChange={this.onChangeUserInfo}/>*/}
                                {/*    </Form.Group>*/}
                                {/*</Form.Row>*/}
                                {/*<Form.Row>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>Country</Form.Label>*/}
                                {/*        <Form.Control*/}
                                {/*            type="text"*/}
                                {/*            id="country"*/}
                                {/*            name="country"*/}
                                {/*            placeholder="Enter here..."*/}
                                {/*            value={userInfoData.country}*/}
                                {/*            onChange={this.onChangeUserInfo}/>*/}
                                {/*    </Form.Group>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>Date of Birth </Form.Label> <br/>*/}
                                {/*        <DatePicker*/}
                                {/*            value={userInfoData.dateOfBirth}*/}
                                {/*            selected={userInfoData.dateOfBirth}*/}
                                {/*            showYearDropdown*/}
                                {/*            dropdownMode="select"*/}
                                {/*            id="dateOfBirth"*/}
                                {/*            name="dateOfBirth"*/}
                                {/*            dateFormat="yyyy-MM-dd"*/}
                                {/*            onChange={this.onChangeDob}*/}
                                {/*        />*/}
                                {/*    </Form.Group>*/}
                                {/*</Form.Row>*/}
                                {/*<Form.Row>*/}
                                {/*    <Form.Group as={Col}>*/}
                                {/*        <Form.Label>Role*</Form.Label>*/}
                                {/*        <Form.Control as="select" id="role" name="role" onChange={this.onChangeUserInfo} value={userInfoData.role}>*/}
                                {/*            <option value={""}></option>*/}
                                {/*            <option value={"VHT"}>VHT</option>*/}
                                {/*            <option value={"Healthworker"}>Healthworker</option>*/}
                                {/*            <option value={"Admin"}>Admin</option>*/}
                                {/*        </Form.Control>*/}
                                {/*        {errors.role && <InlineError text={errors.role}/>}*/}
                                {/*    </Form.Group>*/}
                                {/*</Form.Row>*/}
                            </Col>
                        </Row>
                        <Row style={{float: 'right'}}>
                            <Button primary type="submit" >Create</Button>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

AddUsersForm.propTypes = {
    submitUser: PropTypes.func.isRequired,
    submitUserInfo: PropTypes.func.isRequired
};

export default withRouter(AddUsersForm);