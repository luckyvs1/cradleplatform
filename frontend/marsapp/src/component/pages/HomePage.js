/**
 * Main Class: HomePage
 * Helper Classes: FloatingMenuItem
 * Summary:
 *  Contains the contents and functionality of the Home page.
 */

import React from "react";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {Col, Container, Row, Table} from 'react-bootstrap';
import api from "../../api";
import {MDBContainer} from "mdbreact";
import {Line} from "react-chartjs-2";
import ReferralListTable from "../utils/ReferralListTable";
import FollowUpListTable from "../utils/FollowUpListTable";

class FloatingMenuItem extends React.Component {

    handleClick() {
        this.props.action();
    }

    render() {
        if (this.props.icon === 'add') {
        }

        let label;

        if (this.props.label) {
            label = <label>{this.props.label}</label>;
        }

        return <div
            onClick={this.handleClick.bind(this)}
            className="floating-menu-item">
            {label}
            <div className="ui circular icon button"><i className="material-icons fas fa-plus-circle"></i></div>
        </div>;
    }
}



class HomePage extends React.Component {
    state = { activeItem: 'bio' };

    constructor(props) {
        super(props);

        this.state = {
            referralData: [],
            followUpData: [],
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({ toggled: !this.state.toggled });

    }

    componentDidMount() {
        api.referral.getAllReferral(null).then(res =>{
            console.log("All referral", res);
        });

        api.followUp.getAllFollowUps(null).then(res => {
            console.log("All follow up", res);
        });
    }

    render() {
        let buttons = [];
        let icon = "add";

        if (this.state.toggled) {
            icon = "clear";
            buttons.push(
                <FloatingMenuItem label="Item 1" icon="create" action="" key="i1" />);
            buttons.push(
                <FloatingMenuItem label="Short Cut 2" icon="drafts" action="" key="i2" />);

        }

        buttons.push(<FloatingMenuItem label="" icon={icon} action={this.toggleMenu.bind(this)} key="m" />);


        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>

                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h2>New Referrals</h2>
                                    <hr></hr>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ReferralListTable />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h2>Upcoming Follow-ups</h2>
                                    <hr></hr>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FollowUpListTable />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                </div>

        );

    }
}

export default HomePage;
