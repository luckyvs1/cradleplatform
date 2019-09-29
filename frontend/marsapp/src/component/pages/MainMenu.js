import {Menu, Icon, Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";

export default class MenuTabularOnLeft extends React.Component {
    state = {activeItem: 'bio'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Menu fluid vertical tabular>
                <Menu.Item
                    as={Link} to="/homePage"
                    name='Dashboard'
                    className=""
                    active={activeItem === 'upload'}
                    onClick={this.handleItemClick}>
                    <Icon name='grid dashboard'/>
                    Dashboard
                </Menu.Item>
                <Menu.Item
                    as={Link} to="/allFollowUp"
                    name='Follow Ups'
                    active={activeItem === 'upload'}
                    onClick={this.handleItemClick}>
                    <Icon name='grid searchengin'/>
                    Follow Ups
                </Menu.Item>
                <Menu.Item
                    as={Link} to="/referral"
                    name='Referral'
                    active={activeItem === 'referral'}
                    onClick={this.handleItemClick}>
                    <Icon name='grid redo'/>
                    Referral
                </Menu.Item>
                <Dropdown item text='Patients'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/listPatient"
                                       name='Patients'
                                       active={activeItem === 'patient'}
                                       onClick={this.handleItemClick}
                        >List All Patients</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/patientDetail"
                                       name='Patients'
                                       active={activeItem === 'patient'}
                                       onClick={this.handleItemClick}
                        >Find Patient</Dropdown.Item>
                        <Dropdown.Item
                            as={Link} to="/addPatient"
                            name='Patients'
                            active={activeItem === 'patient'}
                            onClick={this.handleItemClick}
                        >Add Patient</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item
                    as={Link} to="/account"
                    name='Account'
                    active={activeItem === 'account'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/upload"
                    name='Users'
                    active={activeItem === 'users'}
                    onClick={this.handleItemClick}
                />
            </Menu>

        )}
}
