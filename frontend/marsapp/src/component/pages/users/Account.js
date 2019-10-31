/**
 * Class: Account
 * Summary:
 *  Base file for showing contents of Account page.
 */

import React from "react";
import {connect} from "react-redux";
import AccountForm from "../../forms/AccountForm";
import api from "../../../api"
import {Alert} from "react-bootstrap";
import ConfirmAlert from "../../utils/ConfirmAlert"

class Account extends React.Component {
    state = {
        isShow: false,
        message: ""
    }

    submit = data => {
        api.userInfo.createUserInfo(data).then(res => {
            if (res.data) {
                this.onShowAlert(res.data);
            }
        });
    }

    onShowAlert = (message) => {
        this.setState({
                isShow: true,
                message: message
            },
            () => {
                window.setTimeout(() => {
                    this.setState({
                        isShow: false,
                        message: message
                    })
                }, 2000)
            });
    }

    render() {
        return (
            <div>
                <AccountForm submit={this.submit}></AccountForm>
                <ConfirmAlert show={this.state.isShow} message={this.state.message}></ConfirmAlert>
            </div>

        );
    }
}

export default connect(null,)(Account);