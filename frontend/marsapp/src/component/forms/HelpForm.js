import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";
import HeaderMenu from "../pages/HeaderMenu";

class HelpForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <HeaderMenu></HeaderMenu>
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <h3>
                            Learning Materials
                        </h3>
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