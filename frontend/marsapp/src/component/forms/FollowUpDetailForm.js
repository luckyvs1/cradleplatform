/**
 * Class: FollowUpDetailForm
 * Summary:
 *  Contains the contents and functionality of the Follow Up Detail page.
 */

import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, Dropdown, Button, List, TextArea} from "semantic-ui-react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import HeaderMenu from "../pages/HeaderMenu";
import {PageWrapper} from "../../wrappers/crd-page";

class FollowUpDetailForm extends React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        const alertOptions = [
            {
                key: 'No Alert',
                text: 'No Alert',
                value: 'No Alert',
            },
            {
                key: 'Once a week',
                text: 'Once a week',
                value: 'Once a week',
            },
            {
                key: 'Once a month',
                text: 'Once a month',
                value: 'Once a month',
            }
        ];

        return (
            <PageWrapper>
                <Grid.Column width={11}>
                    <h3>
                        Follow Up Details
                    </h3>
                    <Form.Group grouped>
                        <Form.Field
                            control={Input}
                            label='Patient:'
                            value={'0123456'}
                        />
                        <Form.Field
                            control={Input}
                            label='Location:'
                            value={'0123456'}
                        />
                        <Form.Field
                            control={Input}
                            label='Status:'
                            value={'0123456'}
                        />
                        <Form.Field
                            control={Input}
                            label='Frequency:'
                            value={'0123456'}
                        />
                        <Form.Field
                            control={Date}
                            label='Start Date:'
                            value={'0123456'}
                        />
                        <Form.Field
                            control={Date}
                            label='End Date:'
                            value={new Date()}
                        />

                        <Form.Field inline>
                            <label>Alerts:</label>
                            <Dropdown
                                placeholder='Select alert'
                                fluid
                                selection
                                options={alertOptions}
                            />
                        </Form.Field>
                    </Form.Group>
                </Grid.Column>

                <Grid>
                    <Grid.Column width={11}></Grid.Column>
                    <Grid.Column width={5}>
                        <Grid.Row>
                            <Button>
                                Edit
                            </Button>
                            <br/><br/>
                            <Button>
                                Mark as Done
                            </Button>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>

            </PageWrapper>
        );
    }
}

export default FollowUpDetailForm;