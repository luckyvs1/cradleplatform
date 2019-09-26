import React from "react";

import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Image,
} from 'semantic-ui-react'

class ListPatientForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <List selection verticalAlign='middle'>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                        <List.Content>
                            <List.Header>Arron the MR.Robot HACKER</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                        <List.Content>
                            <List.Header>ALEX the CIA HACKER</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                        <List.Content>
                            <List.Header>JOVAN the FBI HACKER</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                        <List.Content>
                            <List.Header>Gurinder the HARRY POTTER HACKER</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                        <List.Content>
                            <List.Header>LUCKY the NASA HACKER</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                        <List.Content>
                            <List.Header>VICKY the GOOGLE HACKER</List.Header>
                        </List.Content>
                    </List.Item>
                </List>

            </div>

        );
    }
}

export default ListPatientForm;