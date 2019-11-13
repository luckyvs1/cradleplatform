/*
    Edit Dialog for Users
    This will edit the UserInfo of the user
 */

import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {MDBContainer} from "mdbreact";
import {Line} from "react-chartjs-2";

class ChartsPage extends React.Component {
    state = {
        dataLine: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Blood Pressure Trend",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    };

    render() {
        return (
            <MDBContainer>
                <h3 className="mt-3">Blood Pressure</h3>
                <Line data={this.state.dataLine} options={{responsive: true}}/>
            </MDBContainer>
        );
    }
}

export default function GraphDialog(origData, {handleClick}) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow}>
                View Graph
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Patient Blood Pressure Trend </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChartsPage></ChartsPage>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


