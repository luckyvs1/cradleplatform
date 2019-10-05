import HeaderMenu from "../component/pages/HeaderMenu";
import React from "react";
import {Grid } from "semantic-ui-react";



export const PageWrapper = ({children}) => (
    <div>
        <div className="ui-toolbar">
            <HeaderMenu></HeaderMenu>
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={13}>
                    {children}
                </Grid.Column>
            </Grid>
        </div>
    </div>
);
