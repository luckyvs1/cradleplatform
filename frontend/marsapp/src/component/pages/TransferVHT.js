import * as React from "react";
import TransferVHTForm from "../forms/TransferVHTForm";
import {connect} from "react-redux";
import api from "../../api";

class TransferVHT extends React.Component{

    submit = data => {
        api.vht.transferVHT(data.firstvht , data.secondvht).then(res => {
            console.log("data", res)

        })
    }

    render() {
        return(
            <div>
                <TransferVHTForm submit={this.submit}></TransferVHTForm>
            </div>
        );
    }
}

export default connect(null,)(TransferVHT);