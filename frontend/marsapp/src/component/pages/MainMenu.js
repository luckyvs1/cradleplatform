import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";

export default class MenuTabularOnLeft extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu fluid vertical tabular>
                <Menu.Item
                    as={Link} to="/upload"
                    name='Follow Ups'
                    active={activeItem === 'upload'}
                    onClick={this.handleItemClick}

                />
                <Menu.Item
                    as={Link} to="/referral"
                    name='Referral'
                    active={activeItem === 'referral'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/upload"
                    name='Patients'
                    active={activeItem === 'patient'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/upload"
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
