/**
 * Class: FollowUpDetail
 * Summary:
 *  Base file for showing contents of FollowUp Detail page.
 */


import React from "react";
import {connect} from "react-redux";
import FollowUpDetailForm from "../../forms/FollowUpDetailForm";
import api from "../../../api";
import ConfirmAlert from "../../utils/ConfirmAlert";

class FollowUpDetail extends React.Component {
    state ={
        isShowConfirm:false,
        isShowError:false,
        isShowConfirmMsg:"",
        isShowErrorMsg:"",
    }
    submit = data => {
        console.log("data", data)
        api.followUp.addFollowUp(data).then(res => {
            if (res) {
                this.setState({
                    ...this.state,
                    isShowConfirm:true,
                    isShowConfirmMsg:"NOICE"
                })
            }
        })
    }

    render() {
        return (
            <div>
            <FollowUpDetailForm submit={this.submit}></FollowUpDetailForm>
                <ConfirmAlert message={this.state.isShowConfirmMsg} show={this.state.isShowConfirm}></ConfirmAlert>
            </div>
        );
    }
}

export default connect(null,)(FollowUpDetail);