/*
    Shows the table of all referrals
 */

import React from "react";
import {withRouter} from "react-router-dom";
import {Table} from 'react-bootstrap';
import api from "../../api";

class ReferralListTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    // TODO: see if there's another method without async, or determine how to handle the wait
    async componentDidMount() {
        api.referral.getAllReferral(null).then(async res => {
            // fetching all follow up
            const data = res.data;

            let newState = [];

            for (let i = 0; i < data.length; i++) {
                // query patient name
                // TODO: Find a nicer way to use the api, or change the api's requested parameter
                let getDataParam = {
                    id: data[i].patientId
                };
                const thePatient = await api.patient.getPatientById(getDataParam).then(res => {
                    return res.data.initials;
                });

                // query referrer name
                const theReferrer = await api.userInfo.getUserInfoById(data[i].referrerId).then(res => {
                    return res.data.firstName + " " + res.data.lastName;
                });

                // TODO: Handle assignee and status when db schema updates
                const theDate =  new Date(data[i].timestamp).toDateString();

                let row = {
                    id: data[i].id,
                    pid: data[i].patientId,
                    pname: thePatient,
                    referrer: theReferrer,
                    assignee: "",
                    dateof: theDate,
                    status: "",
                };

                newState.push(row);
            }
            this.setState({data: newState});
            console.log("state:", this.state);
        })
    }

    handleItemClick = (row) => {
        this.props.history.push({
            pathname: '/referralDetail',
            state: {
                referrerId: row.id
            }
        });
    };

    render() {
        return (
            <div>
                <Table bordered hover size="small">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Patient Initials</th>
                            <th>Referred By</th>
                            <th>Assigned to</th>
                            <th>Referral Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(row => (
                            <tr key={row.id}  class='clickable-row' onClick={() => this.handleItemClick(row)}>
                                <td>{row.pid}</td>
                                <td>{row.pname}</td>
                                <td>{row.referrer}</td>
                                <td>{row.assignee}</td>
                                <td>{row.dateof}</td>
                                <td>{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default withRouter(ReferralListTable);