import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";

class HelpForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div>
                            <p>This page will contain links to learning materials and whatnot.</p>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default HelpForm;