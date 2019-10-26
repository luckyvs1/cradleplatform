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
    Image,
    Button,
    Form,
    FormControl
} from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import _ from 'lodash';

function createData(pid, initial) {
    return {pid, initial};
}

const rows = [
    createData('111555666', 'AD'),
    createData('222555444', 'WE'),
];

const initialState = {
    isLoading: false,
    data: rows,
    searchValue: ''
};

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
            searchValue: ''
        };

        this.searchInput = React.createRef();
    }

    componentDidMount() {
        // TODO: Use api to get data.
        // TODO: Store all api data in 'row'
        // Temporary:
        this.setState(initialState);
    }

    handleSearchChange = () => {
        this.setState({
            isLoading: true,
            searchValue: this.searchInput.current.value
        });

        setTimeout(() => {
            console.log(this.state);

            if (this.state.searchValue.length < 1) {
                return this.setState(initialState);
            }

            const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i');
            const matchId = (result) => re.test(result.pid);
            const matchInitial = (result) => re.test(result.initial);
            const dataId = _.filter(rows, matchId);
            const dataInitial = _.filter(rows, matchInitial);

            this.setState({
                isLoading: false,
                data: _.merge(dataId, dataInitial)
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
        const { isLoading, searchValue, data } = this.state;

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
                                {this.state.data.map(row => (
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