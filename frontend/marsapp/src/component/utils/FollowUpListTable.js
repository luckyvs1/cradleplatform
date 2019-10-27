import React from "react";
import {
    withRouter
} from "react-router-dom";
import {
    Table
} from 'react-bootstrap';
import api from "../../api"

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
            this.setState({data})
        })
    }

    handleItemClick = (row) => {
        this.props.history.push({
            pathname: '/referralDetail',
            state: {
                rid: row.rid,
                initials: row.pname
            }
        });
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <Table bordered hover size="sm">
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
                        <tr key={row.id} class='clickable-row'
                            onClick={() => this.submit(row.id)}>
                            <td> {row.patientId}</td>
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

export default withRouter(FollowUpListTable);