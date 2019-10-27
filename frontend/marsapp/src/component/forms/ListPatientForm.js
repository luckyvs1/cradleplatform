/**
 * Class: ListPatientForm
 * Summary:
 *  Contains the contents and functionality of the List of Patients page.
 */

import React from "react";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form,
    FormControl
} from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import _ from 'lodash';
import api from "../../api";

class ListPatientForm extends React.Component {
    // functions
    // states
    // submit
    // validate

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            filteredData: [],
            searchValue: ''
        };

        this.searchInput = React.createRef();
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
            filteredData: this.state.data,
            searchValue: ''
        });

        api.patient.getAllPatients(null).then(async res => {
            // fetching all follow up
            const data = res.data;
            let newState = [];

            for (let i = 0; i < data.length; i++) {
                let row = {
                    pid: data[i].id,
                    initial: data[i].initials
                };
                newState.push(row);
            }
            this.setState({
                data: newState,
                filteredData: newState,
            });
        });

        this.setState({
            isLoading: false,
            searchValue: ''
        });
    }

    handleSearchChange = () => {
        this.setState({
            isLoading: true,
            searchValue: this.searchInput.current.value
        });

        setTimeout(() => {
            console.log(this.state);

            if (this.state.searchValue.length < 1) {
                return this.setState({
                    isLoading: false,
                    searchValue: '',
                    filteredData: this.state.data
                });
            }

            const rows = this.state.data;
            const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i');
            const matchId = (result) => re.test(result.pid);
            const matchInitial = (result) => re.test(result.initial);
            const dataId = _.filter(rows, matchId);
            const dataInitial = _.filter(rows, matchInitial);

            this.setState({
                isLoading: false,
                filteredData: _.merge(dataId, dataInitial)
            });
        }, 300);
    };

    handleItemClick = (row) => {
        this.props.history.push({
            pathname: '/patientDetail',
            state: {
                pid: row.pid,
                initial: row.initial
            }
        });
    };

    render() {
        const { isLoading, searchValue, filteredData } = this.state;

        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>Patients</h1>
                                </Col>
                                <Col className="text-right">
                                    <Button variant="primary" size="sm" as={Link} to="addPatient">
                                        Create Patient
                                    </Button>
                                </Col>
                            </Row>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-right">
                            <Form className="float-right" inline>
                                <i className="fas fa-search"></i>
                                <FormControl
                                    ref={this.searchInput}
                                    type="text"
                                    placeholder="Search..."
                                    className="mr-sm-2"
                                    onChange={() => this.handleSearchChange()}
                                />
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table hover size="sm">
                                <thead>
                                <tr>
                                    <th width="200">Patient ID</th>
                                    <th>Initials</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.filteredData.map(row => (
                                    <tr key={row.pid} class='clickable-row' onClick={() => this.handleItemClick(row)}>
                                        <td>{row.pid}</td>
                                        <td>{row.initial}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//export default ListPatientForm;
export default withRouter(ListPatientForm);