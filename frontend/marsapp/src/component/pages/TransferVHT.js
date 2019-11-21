import * as React from "react";
import TransferVHTForm from "../forms/TransferVHTForm";
import {connect} from "react-redux";
import api from "../../api";
import ConfirmAlert from "../utils/ConfirmAlert";
import ErrorAlert from "../utils/ErrorAlert";

class TransferVHT extends React.Component{
    state = {
        isShowConfirm: false,
        isShowError: false,
        isShowConfirmMsg: "",
        isShowErrorMsg: "",
    }
    submit = data => {
        api.vht.transferVHT(data.firstvht , data.secondvht).then(res => {
            if (res) {
                this.onShowAlert("Saved follow up details" , false)
            }
        }).catch(error=>{
            this.onShowAlert("Failed to save follow up details" , true)

        })
    }



    onShowAlert = (message, isError) => {
        if (isError) {
            this.setState({
                    ...this.state,
                    isShowError: true,
                    isShowErrorMsg: message,
                },
                () => {
                    window.setTimeout(() => {
                        this.setState({
                            isShowError: false,
                            isShowErrorMsg: message,
                        })
                    }, 2000)
                });
        } else {
            this.setState({
                    ...this.state,
                    isShowConfirm: true,
                    isShowConfirmMsg: message,
                },
                () => {
                    window.setTimeout(() => {
                        this.setState({
                            isShowConfirm: false,
                            isShowConfirmMsg: message,
                        })
                    }, 2000)
                });
        }
    }




    render() {
        return(
            <div>
                <TransferVHTForm submit={this.submit}></TransferVHTForm>
                <br/>
                <br/>
                <br/>
                <br/>
                <ConfirmAlert message={this.state.isShowConfirmMsg} show={this.state.isShowConfirm}></ConfirmAlert>
                <ErrorAlert message={this.state.isShowErrorMsg} show={this.state.isShowError}></ErrorAlert>
            </div>
        );
    }
}

export default connect(null,)(TransferVHT);