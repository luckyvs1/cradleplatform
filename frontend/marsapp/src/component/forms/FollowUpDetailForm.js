import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, Dropdown, Button, List, TextArea} from "semantic-ui-react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import HeaderMenu from "../pages/HeaderMenu";

class FollowUpDetailForm extends  React.Component {
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
            <div className="ui-toolbar">
                <HeaderMenu></HeaderMenu>
                <Grid>
                    <Grid.Column width={3}>
                        <MenuTabularOnLeft/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <h3>
                            Follow Up Details
                        </h3>
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <b>Patient: </b> 0123456 - AS <br />
                                    <b>Location: </b> Village No. 5 <br />
                                    <b>Status: </b> Ongoing<br />
                                    <b>Frequency: </b> Once a week <br />
                                    <b>Start Date: </b> 2019/01/08 <br />
                                    <b>End Date: </b> N/A<br />
                                    <b>Alerts: </b>
                                    <Dropdown
                                        placeholder='Select alert'
                                        fluid
                                        selection
                                        options={alertOptions}
                                    />
                                    <br />
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button>
                            Edit
                        </Button>
                        <br /><br />
                        <Button>
                            Mark as Done
                        </Button>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default FollowUpDetailForm;