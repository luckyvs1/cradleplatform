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
import HeaderMenu from "../pages/HeaderMenu";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const statusGreen = {
    backgroundColor: "green"
};

class ReferralDetailForm extends React.Component {
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
            <div className="ui-toolbar  ">
                <HeaderMenu></HeaderMenu>

                <Grid>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={2}>
                        <Form size={'small  '}>
                            <Form.Group grouped>
                                <Form.Field>
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
                    <Grid.Column width={13}>

                        <Tabs className="" size={'large'}>
                            <Tab eventKey="t" title="Patient Information">
                                <Grid>
                                    <Grid.Column width={8}>
                                        <Form.Group grouped>
                                            <Form.Field
                                                control={Input}
                                                label='Patient ID:'
                                                value={'0123456'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Initials: '
                                                value={'AS'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Age:'
                                                value={'35'}

                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Sex:'
                                                value={'Female'}

                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Pregnant:'
                                                value={'Yes'}

                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Age:'
                                                value={'5 Months '}
                                            />
                                        </Form.Group>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Group grouped>
                                            <Form.Field
                                                control={Input}
                                                label='Zone:'
                                                value={'5'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Block No: '
                                                value={'5'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Tank No:'
                                                value={'5'}

                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Village No:'
                                                value={'5'}

                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Houshold No:'
                                                value={'5'}

                                            />
                                        </Form.Group>

                                    </Grid.Column>
                                </Grid>
                            </Tab>
                            <Tab eventKey="tt" title="Referral Detail">
                                <Grid>
                                    <Grid.Column width={8}>
                                        <Form.Group grouped>
                                            <Form.Field
                                                control={Input}
                                                label='Date:'
                                                value={'2019/05/05 '}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Referrer: '
                                                value={'John Smith'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Referred to:'
                                                value={'health_facility_name '}
                                            />
                                        </Form.Group>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Group grouped>
                                            <Form.Field
                                                control={Input}
                                                label='Blood Pressure:'
                                                value={' 120/80 '}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Heart Rate: '
                                                value={'60'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Status:'
                                                value={'ikely Healthy'}
                                            />
                                        </Form.Group>

                                    </Grid.Column>
                                </Grid>
                                <Grid.Column>
                                    <Grid>
                                        <Grid.Column width={3}>
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
                                                </Form.Group>
                                            </Form>

                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Form size={'small'}>
                                                <Form.Group grouped>
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
                                                </Form.Group>
                                            </Form>
                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Form size={'small'}>
                                                <Form.Group grouped>
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
                                                </Form.Group>
                                            </Form>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <Form size={'large'}>
                                                <Form.Field
                                                    control={TextArea}
                                                    label='Other Symptoms'
                                                    placeholder='Tell us more about you... that is breaking'
                                                />
                                                <Form.Field
                                                    control={TextArea}
                                                    label='Comments'
                                                    placeholder='Additional comments and actions taken...'
                                                />

                                            </Form>
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Column>
                            </Tab>
                            <Tab eventKey="ttt" title="Diagnosis Detail">
                                <Grid>
                                    <Grid.Column width={8}>
                                        <Form.Group grouped>
                                            <Form.Field
                                                control={Input}
                                                label='Date:'
                                                value={'2019/05/15'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Healthworker:'
                                                value={'Mary Sue'}
                                            />
                                        </Form.Group>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Group grouped>

                                            <Form.Field
                                                control={Input}
                                                label='Blood Pressure: '
                                                value={'120/80'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Heart Rate:'
                                                value={'60'}
                                            />
                                            <Form.Field
                                                control={Input}
                                                label='Status:'
                                                value={'Likely Healthy'}
                                            />
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid>
                                <Grid.Column>
                                    <Grid>
                                        <Grid.Column width={3}>
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
                                                </Form.Group>
                                            </Form>

                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Form size={'small'}>
                                                <Form.Group grouped>
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
                                                </Form.Group>
                                            </Form>
                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Form size={'small'}>
                                                <Form.Group grouped>
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
                                                </Form.Group>
                                            </Form>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <Form size={'small'}>
                                                <Form.Field
                                                    control={TextArea}
                                                    label='Other Symptoms'
                                                    placeholder='Tell us more about you... that is breaking'
                                                />
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
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Column>
                            </Tab>
                        </Tabs>


                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default ReferralDetailForm;