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
    Button
} from 'react-bootstrap';

class ListPatientForm extends React.Component {
    // functions
    // states
    // submit
    // validate
     //Getting data from the API and saving it inside of our app component (inside the state). The data
        //is reusable in the component
    constructor(props){
            super(props);
            this.state = {
                items: [], //array of the data we're gonna fetch from the API
                isLoaded: false,
            }
        }

    componentDidMount(){
        fetch('http://localhost:8080/VHT/1/patients/1', {mode: 'cors'})
            .then(res => res.json())  //convert response from the API to JSON
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }else{
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
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th width="10"></th>
                                            <th>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Image src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" rounded />
                                            </td>
                                            <td>
                                                <Link to="patientDetail">
                                                    Test 1
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Image src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" rounded />
                                            </td>
                                            <td>
                                                <Link to="patientDetail">
                                                    Test 2
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default ListPatientForm;
