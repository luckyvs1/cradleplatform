/**
 * Class: AddReadingForm
 * Summary:
 *  Contains the contents and functionality of the Readings page.
 */

import React from "react";
import {Checkbox, Form, Input, Grid} from "semantic-ui-react";
import {PageWrapper} from "../../../wrappers/crd-page";
class ReadingForm extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Grid.Column>
                    <Form size={'small'}>
                        <Form.Group grouped>
                            <Form.Field
                                control={Input}
                                label='Patient ID'
                                placeholder='Patient ID'
                            />
                            <Form.Field
                                control={Input}
                                label='Initials'
                                placeholder='Initials'
                            />
                            <Form.Field
                                control={Input}
                                label='Age'
                                placeholder='Age'
                            />
                            <Form.Field
                                control={Checkbox}
                                label='Pregnant'
                                placeholder='Pregnant'
                            />
                            <Form.Field
                                control={Input}
                                label='Gestational Age'
                                placeholder='Gestational Age'
                            />
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </PageWrapper>
        );
    }
}

export default ReadingForm;