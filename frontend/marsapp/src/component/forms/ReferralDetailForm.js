/**
 * Class: ReferralDetailForm
 * Summary:
 *  Contains the contents and functionality of the Referral Detail page.
 */

import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core";
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
    Dropdown,
    Grid,
    Row
} from 'semantic-ui-react'

const statusGreen = {
    backgroundColor: "green"
};

class ReferralDetailForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        const friendOptions = [
            {
                key: 'Jenny Hess',
                text: 'Jenny Hess',
                value: 'Jenny Hess',
            },
            {
                key: 'Elliot Fu',
                text: 'Elliot Fu',
                value: 'Elliot Fu',
            },
            {
                key: 'Stevie Feliciano',
                text: 'Stevie Feliciano',
                value: 'Stevie Feliciano',
            },
            {
                key: 'Christian',
                text: 'Christian',
                value: 'Christian',
            },
            {
                key: 'Matt',
                text: 'Matt',
                value: 'Matt',
            },
            {
                key: 'Justen Kitsune',
                text: 'Justen Kitsune',
                value: 'Justen Kitsune',
            },
        ];

        const statusOptions = [
            {
                key: 'Requires Response',
                text: 'Requires Response',
                value: 'Requires Response',
            },
            {
                key: 'Done',
                text: 'Done',
                value: 'Done',
            }
        ];

        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column  width={13}>
                        <Grid.Column  width={9}>
                            <Form size={'small'}>
                                <Form.Group inline>
                                    <Form.Field inline>
                                        <label>Assign To:</label>
                                        <Dropdown
                                            placeholder='Select Assignee'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Status:</label>
                                        <Dropdown
                                            placeholder='Select Status'
                                            fluid
                                            selection
                                            options={statusOptions}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={4} align="left">
                                            Patient Info
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell align="right">
                                        <b>Patient ID: </b>  <br />
                                        <b>Initials: </b> <br />
                                        <b>Age: </b> <br />
                                        <b>Sex: </b> <br />
                                        <b>Pregnant: </b> <br />
                                        <b>Gestation Age: </b> <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        0123456 <br />
                                        AS <br />
                                        35 <br />
                                        Female <br />
                                        Yes <br />
                                        5 Months <br />
                                    </TableCell>
                                    <TableCell align="right">
                                        <b>Zone: </b>  <br />
                                        <b>Block No: </b>  <br />
                                        <b>Tank No: </b>  <br />
                                        <b>Village No: </b> <br />
                                        <b>Houshold No: </b> <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        5 <br />
                                        5 <br />
                                        5 <br />
                                        5 <br />
                                        5 <br />
                                    </TableCell>
                                </TableRow>
                                <TableRow><TableCell colspan={4}/></TableRow>
                            </Table>
                        </Grid.Column>

                        <Grid.Column>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={4} align="left">
                                            Referral Detail
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell align="right">
                                        <b>Date: </b>  <br />
                                        <b>Referrer: </b> <br />
                                        <b>Referred to: </b> <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        2019/05/05 <br />
                                        John Smith <br />
                                        health_facility_name <br />
                                    </TableCell>
                                    <TableCell align="right">
                                        <b>Blood Pressure: </b>  <br />
                                        <b>Heart Rate: </b>  <br />
                                        <b>Status: </b>  <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        120/80 <br />
                                        60 <br />
                                        <span style={statusGreen}>Likely Healthy</span> <br />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <b>Symptoms:</b>
                                    </TableCell>
                                    <TableCell colSpan={3} >
                                        <Form size={'small'}>
                                            <Form.Group grouped>
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='No Symptoms (patient Healthy)'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Headache'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Blurred vision'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Abdominal pain'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Bleeding'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Feverish'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Unwell'
                                                />
                                                <Form.Field
                                                    control={TextArea}
                                                    label='Other Symptoms'
                                                    placeholder='Tell us more about you... that is breaking'
                                                />
                                            </Form.Group>
                                        </Form>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colspan={4}>
                                        <Form size={'small'}>
                                            <Form.Field
                                                control={TextArea}
                                                label='Comments'
                                                placeholder='Additional comments and actions taken...'
                                            />
                                        </Form>
                                    </TableCell>
                                </TableRow>
                                <TableRow><TableCell colspan={4}/></TableRow>
                            </Table>
                        </Grid.Column>

                        <Grid.Column>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={4} align="left">
                                            Diagnosis Detail
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell align="right">
                                        <b>Date: </b>  <br />
                                        <b>Healthworker: </b> <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        2019/05/15 <br />
                                        Mary Sue <br />
                                    </TableCell>
                                    <TableCell align="right">
                                        <b>Blood Pressure: </b>  <br />
                                        <b>Heart Rate: </b>  <br />
                                        <b>Status: </b>  <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        120/80 <br />
                                        60 <br />
                                        <span style={statusGreen}>Likely Healthy</span> <br />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <b>Symptoms:</b>
                                    </TableCell>
                                    <TableCell colSpan={3} >
                                        <Form size={'small'}>
                                            <Form.Group grouped>
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='No Symptoms (patient Healthy)'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Headache'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Blurred vision'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Abdominal pain'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Bleeding'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Feverish'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Unwell'
                                                />
                                                <Form.Field
                                                    control={TextArea}
                                                    label='Other Symptoms'
                                                    placeholder='Tell us more about you... that is breaking'
                                                />
                                            </Form.Group>
                                        </Form>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colspan={4}>
                                        <Form size={'small'}>
                                            <Form.Field
                                                control={TextArea}
                                                label='Follow-up Care Needed'
                                                placeholder='Follow-up care detail...'
                                            />
                                            <Form.Field
                                                control={TextArea}
                                                label='Diagnosis'
                                                placeholder='Diagnosis...'
                                            />
                                        </Form>
                                    </TableCell>
                                </TableRow>
                                <TableRow><TableCell colspan={4}/></TableRow>
                            </Table>
                        </Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default ReferralDetailForm;