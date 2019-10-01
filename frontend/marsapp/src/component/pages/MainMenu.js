/**
 * Class: MenuTabularOnLeft
 * Summary:
 *  Base file for showing contents of Side bar menu on the left.
 */

import {Menu, Header, Icon, Image, Segment, Sidebar, Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core";





class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [{
                text: 'Dashboard',
                link: '/homePage',
                icon: 'grid dashboard'

            }, {
                text: 'Follow Ups',
                link: '/allFollowUp',
                icon: 'grid searchengin'

            }, {
                text: 'Referral',
                link: '/referral',
                icon: 'grid redo'

            }, {
                text: 'List All Patients',
                link: '/listPatient',
                icon: 'grid list ul'

            }, {
                text: 'Find Patient',
                link: '/patientDetail',
                icon: 'grid user'

            }, {
                text: 'Add Patient',
                link: '/addPatient',
                icon: 'grid add square'

            }, {
                text: 'Account',
                link: '/account',
                icon: 'grid folder open'

            }, {
                text: 'Users',
                link: '/listUser',
                icon: 'grid user md'

            }, {
                text: 'Learning Materials',
                link: '/help',
                icon: 'grid book'
            }]
        }
    }

    render() {
        let links = this.state.links.map((link, i) => <Menu.Item  vertical as={Link} to={link.link} >{link.text}<Icon name={link.icon}/></Menu.Item> );

        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    {links}
                </ul>
            </div>
        )
    }
}


export default class MenuTabularOnLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }

    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
        ;
    }

    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        const {activeItem} = this.state
        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={this._menuToggle}></div>
                    <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
                    <div className="title">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <Menu fluid vertical tabular size={'massive'}>
                    <MenuLinks menuStatus={menuStatus}/>
                </Menu>
            </div>
        )
    }
}
