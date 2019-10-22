/**
 * Class: ListPatientForm
 * Summary:
 *  Contains the contents and functionality of the List of Patients page.
 */

import React from "react";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Table
} from 'semantic-ui-react'

import {
    Container,
    Row,
    Col,
    Image,
    Button
} from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import _ from 'lodash';
import { Search } from 'semantic-ui-react';

function createData(pid, initial, img) {
    return {pid, initial, img};
}

const rows = [
    createData('111555666', 'AD', 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'),
    createData('222555444', 'WE', 'https://react.semantic-ui.com/images/avatar/small/daniel.jpg'),
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
    }

    componentDidMount() {
        // TODO: Use api to get data.
        // TODO: Store all api data in 'row'
        // Temporary:
        this.setState(initialState);
    }

    handleResultSelect = (e, { result }) => this.setState({
        searchValue: result.initial
    });

    handleSearchChange = (e, { value }) => {
        this.setState({
            isLoading: true,
            searchValue: value
        });

        setTimeout(() => {
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
                            <Search
                                open={false}
                                loading={isLoading}
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                    leading: true,
                                })}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered hover size="small">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell width={1}></Table.HeaderCell>
                                        <Table.HeaderCell>Initial</Table.HeaderCell>
                                        <Table.HeaderCell>Id</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {this.state.data.map(row => (
                                        <Table.Row key={row.pid} class='clickable-row' onClick={() => this.handleItemClick(row)}>
                                            <Table.Cell>
                                                <Image src={row.img} rounded />
                                            </Table.Cell>
                                            <Table.Cell>
                                                {row.initial}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {row.pid}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
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
