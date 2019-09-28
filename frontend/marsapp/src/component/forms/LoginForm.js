import React from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Message,
    Select,
    TextArea, Grid,
} from 'semantic-ui-react'
import "../../App.css"
import {Link} from "react-router-dom";

class LoginForm extends React.Component {
    //state updates as user types
    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };

    // recieves event and update data
    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    /*
    * 1 - validate
    * 2 - submit data of login and catch errors
    * */
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({errors: err.response.data.errors, loading: false})
                );
        }
    };


    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) {
            errors.email = "Invalid email";
        }
        if (!data.password) {
            errors.password = "Can't be blank";
        }
        return errors;
    };

    render() {
        const {data, errors, loading} = this.state;

        return (
            <Grid>

                <Grid.Column >
                    <div className={"stand"}>
                        <div className={"outer-screen"}>
                            <div className={"inner-screen"}>
                                <Grid>

                                    <Grid.Column width={1}></Grid.Column>
                                    <Grid.Column width={14}>
                                        <Form onSubmit={this.onSubmit} loading={loading} size={'small'}>
                                            {errors.global && (
                                                <Message negative>
                                                    <Message.Header>Something went wrong</Message.Header>
                                                    <p>{errors.global}</p>
                                                </Message>
                                            )}
                                            <Form.Field error={!!errors.email}>
                                                <label htmlFor="email"> Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="example@example.com"
                                                    value={data.email}
                                                    onChange={this.onChange}
                                                />
                                                {/*error handling*/}
                                                {errors.email && <InlineError text={errors.email}/>}
                                            </Form.Field>
                                            <Form.Field error={!!errors.password}>
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Make it secure"
                                                    value={data.password}
                                                    onChange={this.onChange}
                                                />
                                                {/*error handling*/}
                                                {errors.password && <InlineError text={errors.password}/>}
                                            </Form.Field>
                                            <Button className={"submit-button"}>Login</Button>
                                            <Form.Field>
                                                <Link to="/forgot_password">Forgot Password?</Link>
                                                <Link to="/signup">Sign Up?</Link><br/>

                                                <Link to="/homePage">GO TO HOME</Link>
                                            </Form.Field>
                                        </Form>

                                    </Grid.Column>
                                </Grid>
                            </div>
                        </div>
                    </div>

                </Grid.Column>
            </Grid>

        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;