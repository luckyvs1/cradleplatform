import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Grid,
    Image,
} from 'semantic-ui-react'
import {makeStyles} from "@material-ui/core";
import MenuTabularOnLeft from "../pages/MainMenu";




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('111555666', 'Alex', 'thomas', new Date().toDateString()),
    createData('222555444', 'Bob', 'theo', new Date().toDateString()),
    createData('111222333', 'fanny', 'theresha', new Date().toDateString()),
    createData('111222888', 'hanny', 'Brian', new Date().toDateString()),
    createData('444555666', 'janny', 'Katy', new Date().toDateString()),
];


class AllFollowUpForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(2),

        },
        table: {
            minWidth: 650,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
        uiHeader: {
            textAlign:'center',
        }

    }));


    render() {
        const useStyles= this.useStyles

        return (
            <div className="ui-toolbar">
               <Grid>
                   <Grid.Column width={3}>
                       <MenuTabularOnLeft></MenuTabularOnLeft>
                   </Grid.Column>
                   <Grid.Column width={13}>
                       <Grid.Column stretched width={5}>
                           <Paper className={useStyles.root}>
                               <h2 as="ui header" className='ui-header'>Upcoming Follow Up</h2>
                               <Table className={useStyles.table}>
                                   <TableHead>
                                       <TableRow>
                                           <TableCell>Patient Id</TableCell>
                                           <TableCell align="right">Patient Name</TableCell>
                                           <TableCell align="right">Referred By</TableCell>
                                           <TableCell align="right">Referral Date</TableCell>
                                       </TableRow>
                                   </TableHead>
                                   <TableBody>
                                       {rows.map(row => (
                                           <TableRow key={row.name}>
                                               <TableCell component="th" scope="row">
                                                   {row.name}
                                               </TableCell>
                                               <TableCell align="right">{row.calories}</TableCell>
                                               <TableCell align="right">{row.fat}</TableCell>
                                               <TableCell align="right">{row.carbs}</TableCell>
                                           </TableRow>
                                       ))}
                                   </TableBody>
                               </Table>
                           </Paper>


                       </Grid.Column>
                   </Grid.Column>

               </Grid>
            </div>

        );
    }
}

export default AllFollowUpForm;