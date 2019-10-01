/**
 * Class: HelpForm
 * Summary:
 *  Contains the contents and functionality of the Help / Learning Mateirals page.
 */

import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Checkbox,Embed, Tab,Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";
import HeaderMenu from "../pages/HeaderMenu";
import {makeStyles} from "@material-ui/core";
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

const panes = [
    { menuItem: 'Help Video 1', render: () => <Tab.Pane><EmbedExampleYouTube/></Tab.Pane> },
    { menuItem: 'Help Video 2', render: () => <Tab.Pane><EmbedExampleYouTube1/></Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />






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
                            <Grid >
                                <Grid.Row streched>
                                    <TabExampleBasic>   </TabExampleBasic>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default HelpForm;