/**
 * Class: HelpForm
 * Summary:
 *  Contains the contents and functionality of the Help / Learning Mateirals page.
 */

import React from "react";
import TopNavigation from "../navigation/TopNavigation";
import {Col, Container, Row, Tab, Table, Tabs} from 'react-bootstrap';

class HelpForm extends React.Component {

    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <h1>Learning Materials</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tabs >
                                <Tab eventKey="help_video_1" title="Help Video 1">
                                    <Table bordered hover size="sm">
                                        <iframe title="Video 1" width="1280" height="700" src="https://www.youtube.com/embed/1lCbhtBQr0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Table>
                                </Tab>
                                <Tab eventKey="help_video_2" title="Help Video 2">
                                    <Table bordered hover size="sm">
                                        <iframe title="Video 2" width="1280" height="700" src="https://www.youtube.com/embed/AMlBuC60LUQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Table>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HelpForm;