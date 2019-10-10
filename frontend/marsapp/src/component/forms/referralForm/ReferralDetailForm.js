/**
 * Class: ReferralDetailForm
 * Summary:
 *  Contains the contents and functionality of the Referral Detail page.
 */

import React from "react";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Row,
    Col,
    Form,
    Button,
    Container,
    Tabs,
    Tab
} from 'react-bootstrap';
import api from "../../api"

class ReferralDetailForm extends React.Component {
    // functions
    // states
    // submit
    // validate

    componentDidMount() {
        let data = {referrerId:1}
        api.referral.getReferralById(data).then(res => {
            console.log("All referral", res);
        })
    }

    render() {

        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Referral Information</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Tabs id="controlled-tab-example">
                        <Tab eventKey="home" title="Patient Information">
                            <br></br>
                            <Row className="mb-4">
                                <Col className="border-right">
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Patient ID</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="patient"
                                                    name="patient"
                                                    value={'0123456'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Initials</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="initials"
                                                    name="initials"
                                                    value={'AS'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    id="age"
                                                    name="age"
                                                    value={'35'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Sex</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="sex"
                                                    name="sex"
                                                    value={'Female'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Pregnant</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="pregnant"
                                                    name="pregnant"
                                                    value={'Yes'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="age"
                                                    name="age"
                                                    value={'5 months'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Zone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="zone"
                                                    name="zone"
                                                    value={'5'}/>
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Block Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="block_number"
                                                    name="block_number"
                                                    value={'5'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Tank Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="tank_number"
                                                    name="tank_number"
                                                    value={'5'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Village Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="village_number"
                                                    name="village_number"
                                                    value={'5'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Household Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="household_number"
                                                    name="household_number"
                                                    value={'5'} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="Referral Information">
                            <br></br>
                            <Row>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="date"
                                            name="date" />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Referrer</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="referrer"
                                            name="referrer"
                                            value={'John Smith'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Blood Pressure</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="blood_pressure"
                                            name="blood_pressure"
                                            value={'120/80'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Heart Rate</Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="heart_rate"
                                            name="heart_rate"
                                            value={'60'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="status"
                                            name="status"
                                            value={'Likely Healthy'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Referred to:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="referred_to"
                                            name="referred_to"
                                            value={'health_facility_name'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Symptoms</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Additional Symptoms" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <Button variant="outline-primary" size="sm">No Symptoms</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Headache</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Bleeding</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Blurred Vision</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Feverish</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Adbdominal pain</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Unwell</Button>&nbsp;
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Comments</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Comments" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="contact" title="Diagnosis Detail">
                            <br></br>
                            <Row>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="date"
                                            name="date" />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Healthworker</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="healthworker"
                                            name="healthworker"
                                            value={'Mary Sue'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Blood Pressure</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="blood_pressure"
                                            name="blood_pressure"
                                            value={'120/80'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Heart Rate</Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="heart_rate"
                                            name="heart_rate"
                                            value={'60'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="status"
                                            name="status"
                                            value={'Likely Healthy'} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Symptoms</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Additional Symptoms" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <Button variant="outline-primary" size="sm">No Symptoms</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Headache</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Bleeding</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Blurred Vision</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Feverish</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Adbdominal pain</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Unwell</Button>&nbsp;
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Follow-up Care Needed</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Follow-up care details" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Diagnosis</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Diagnosis" />
                                    </Form.Group>
                                </Col>
                            </Row> 
                        </Tab>
                    </Tabs>
                    {/* <Grid>
                        <Grid.Column width={4}>
                            <Form size={'small'}>
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
                        <Grid.Column width={9}>
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
                    </Grid> */}
                </Container>
            </div>
        );
    }
}

export default ReferralDetailForm;