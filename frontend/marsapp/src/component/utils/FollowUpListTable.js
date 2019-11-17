/*
    Shows the table of all referrals
 */

import React from "react";
import {withRouter} from "react-router-dom";
import {Table} from 'react-bootstrap';
import api from "../../api";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class FollowUpListTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: "",
                required: null,
                treatment: "",
            }],
        };
    }

    componentDidMount() {
        api.followUp.getAllFollowUps(null).then(res => {
            const data = res.data;
            this.setState({data});
        })
    }

    // submit = event => {
    //     if (event) {
    //         this.props.updatePatientFollowUp(event);
    //         this.props.submit(event);
    //     }
    // };

    handleItemClick = (row) => {
        this.props.history.push({
            pathname: '/followUpDetail',
            state: row
        });
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <Table bordered hover size="sm" className={"table-wrapper-scroll-y my-custom-scrollbar rtc"}>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Diagnosis</th>
                            <th>Follow Up Notes</th>
                            <th>Treatment</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(row => (
                            <tr key={row.id}
                                class='clickable-row'
                                onClick={() => this.handleItemClick(row)}>
                                <td>{row.patientId}</td>
                                <td>{row.diagnosis}</td>
                                <td>{row.followUpNotes}</td>
                                <td>{row.treatment}</td>
                                <td>{row.frequency}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}


// const mapStateToProps = (state, ownProps) => {
//     return {
//         userid: state.data
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         updatePatientFollowUp: (data) => {
//             dispatch({type: "patientFollowUp", data: data})
//         }
//     }
// };
//
// FollowUpListTable.propTypes = {
//     submit: PropTypes.func.isRequired
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FollowUpListTable);
export default withRouter(FollowUpListTable);