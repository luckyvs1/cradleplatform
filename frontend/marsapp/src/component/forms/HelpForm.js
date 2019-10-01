/**
 * Class: HelpForm
 * Summary:
 *  Contains the contents and functionality of the Help / Learning Mateirals page.
 */

import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox,Embed, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";
import HeaderMenu from "../pages/HeaderMenu";
const EmbedExampleYouTube = () => (
    <Embed
        id='AMlBuC60LUQ'
        placeholder=''
        source='youtube'
    />
)
const EmbedExampleYouTube1 = () => (
    <Embed
        id='1lCbhtBQr0Q'
        placeholder=''
        source='youtube'
    />
)

class HelpForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate


    render() {
        return (
            <div className="ui-toolbar ">
                <HeaderMenu></HeaderMenu>
                <Grid>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={13}>
                        <h3>
                            Learning Materials
                        </h3>
                        <div>
                            <p>This page will contain links to learning materials and whatnot.</p>
                        </div>
                        <EmbedExampleYouTube/>
                        <EmbedExampleYouTube1/>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default HelpForm;