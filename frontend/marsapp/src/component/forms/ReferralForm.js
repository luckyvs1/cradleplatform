import React from "react";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core";
import MenuTabularOnLeft from "../pages/MainMenu";
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
    Grid
} from 'semantic-ui-react'
import {Link} from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('111555666', 'Alex', 'thomas', new Date().toDateString()),
    createData('222555444', 'Bob', 'theo', new Date().toDateString()),
    createData('111222333', 'fanny', 'theresha', new Date().toDateString()),
    createData('111222888', 'hanny', 'Brian', new Date().toDateString()),
    createData('444555666', 'janny', 'Katy', new Date().toDateString()),
];

class ReferralForm extends React.Component {
    state = {activeItem: 'bio'}

    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    }
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
            textAlign: 'center',
        }

    }));

    render() {
        const {activeItem} = this.state
        const useStyles = this.useStyles
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
        ]


        return (
            <div className="ui-toolbar">

                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column  width={14}>
                        <Grid.Column  width={10}>
                                <Form>
                                    <Form.Group  inlined width={'equal'}>
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
                                                options={friendOptions}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Sort By:</label>
                                            <Dropdown
                                                placeholder='Select Sort By'
                                                fluid
                                                selection
                                                options={friendOptions}
                                            />
                                        </Form.Field>
                                        <Form.Field
                                            as={Link} to="/createReferral">
                                            <input type="submit" value="New Referral" />
                                        </Form.Field>

                                    </Form.Group>
                                </Form>
                        </Grid.Column>
                        <Grid.Column>
                                <Paper className={useStyles.root}>
                                    <h2 style={useStyles.uiHeader}> Referrals List</h2>
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
                                                <TableRow key={row.name} component={Link} to={"/referralDetail"}>
                                                    <TableCell component="th" scope="row" >
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

export default connect(null,)(ReferralForm);