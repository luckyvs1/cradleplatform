/**
 * Class: ListPatientForm
 * Summary:
 *  Contains the contents and functionality of the List of Patients page.
 */

import React from "react";
import {Link} from "react-router-dom";
import TopNavigation from "../../navigation/TopNavigation";
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

function createData(pid, initial, img) {
    return {pid, initial, img};
}

const rows = [
    createData('111555666', 'AD', 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'),
    createData('222555444', 'WE', 'https://react.semantic-ui.com/images/avatar/small/daniel.jpg'),
];

class ListPatientForm extends React.Component {
    // functions
    // states
    // submit
    // validate

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
                        <Col>
                            <Table bordered hover size="small">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell width={1}></Table.HeaderCell>
                                        <Table.HeaderCell>Initial</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {rows.map(row => (
                                        <Table.Row key={row.pid} onClick={() => this.handleItemClick(row)}>
                                            <Table.Cell>
                                                <Image src={row.img} rounded />
                                            </Table.Cell>
                                            <Table.Cell>
                                                {row.initial}
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