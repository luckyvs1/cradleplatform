import {Menu ,Icon, Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";
import {Grid} from 'semantic-ui-react'

export default class HeaderMenu extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid>
                <Grid.Column width={5}>
                    <h1>Cradle Platform</h1>
                </Grid.Column>
                <Grid.Column width={6}  floated='right'>
                    <div className="my-btn">
                        <div className="my-btn-border"></div>
                        <i className="fas fa-bell btn-bell"></i>
                    </div>

                    <Menu horizontal secondary floated='right'>
                        <Menu.Item
                            as={Link} to="/homePage"
                            name='Notification'
                            className=""
                            active={activeItem === 'upload'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link} to="/"
                            name='Logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
            </Grid>


        )}
}
