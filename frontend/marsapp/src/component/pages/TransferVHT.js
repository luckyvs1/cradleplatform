import * as React from "react";
import TransferVHTForm from "../forms/TransferVHTForm";
import {connect} from "react-redux";

class TransferVHT extends React.Component{
    render() {
        return(
            <div>
                <TransferVHTForm></TransferVHTForm>
            </div>
        );
    }
}

export default connect(null,)(TransferVHT);