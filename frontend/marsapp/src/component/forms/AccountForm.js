/**
 * Class: AccountForm
 * Summary:
 *  Contains the contents and functionality of the Account page.
 */

import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";
import HeaderMenu from "../pages/HeaderMenu";
import {PageWrapper} from "../../wrappers/crd-page";

class AccountForm extends React.Component {
    render() {

        return (
            <PageWrapper>
                <h3>
                    Your Account
                </h3>
                <Grid>
                    <Grid.Column>
                        <Form.Group grouped>
                            <Form.Field
                                control={Input}
                                label='Username'
                                placeholder='Patient ID'
                                value={'jsmith'}
                            />
                            <Form.Field
                                control={Input}
                                label='First Name:'
                                placeholder='Patient ID'
                                value={'John'}
                            />
                            <Form.Field
                                control={Input}
                                label='Last Name:'
                                value={'Smith'}
                            />

                            <Form.Field
                                control={Input}
                                label='Role:'
                                value={'Healthworker'}
                            />

                            <Form.Field
                                control={Input}
                                label='at_a_station_no:'
                                value={'5'}
                            />

                            <Form.Field
                                control={Input}
                                label='Email:'
                                value={'bob@bob.ca'}
                            />

                            <Form.Field
                                control={Input}
                                label='Phone Number:'
                                value={'123-456-7896'}
                            />
                        </Form.Group>
                    </Grid.Column>
                </Grid>
            </PageWrapper>
        );
    }
}

export default AccountForm;