import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import api from "../../api";
import GreenResponse from "../utils/GreenResponse";
import TriangleResponseReading from "../utils/YellowResponse";
import RedResponse from "../utils/RedResponse";

const columns = [
    {
        id: "id",
        label: "Timestamp",
        minWidth: 100,
        align: "right",
        format: value => new Date(value).toLocaleDateString() + "\n" +new Date(value).toLocaleTimeString()
    },
    { id: "trafficLight", label: "Traffic Light", minWidth: 100},
    { id: "systolic", label: "Systolic", minWidth: 100, format: value => value},
    { id: "diastolic", label: "Diastolic", minWidth: 100, format: value => value},
    { id: "gestationalStartDate", label: "Gestational Start Date", minWidth: 100, format: value => value.toLocaleString()},
    { id: "symptoms", label: "Symptoms", minWidth: 100, format: value => value.toLocaleString()},
];

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: "auto"
    }
});

function createData(id, trafficLight, systolic, diastolic, gestationalStartDate, symptoms) {
    return { id, trafficLight, systolic, diastolic, gestationalStartDate, symptoms };
}

const newState = [];

api.reading.getReadingForPatient({patient_id: 1, latest: false}).then(async res => {
    console.log("get reading id", res);

    const readingData = res.data;

    for (let i = 0; i < readingData.length; i++) {
        newState.push(createData(readingData[i].timestamp,
                                readingData[i].vitalsTrafficLight,
                                readingData[i].systolicBloodPressure,
                                readingData[i].diastolicBloodPressure,
                                (readingData[i].gestationalAge + " " + readingData.gestationalAgeTimeUnit),
                                readingData[i].symptoms,
                                ));
    }
});

function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newState
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {(() => {
                                                        switch(value) {
                                                            case "Green":
                                                                return <GreenResponse/>;
                                                            case "Yellow_up":
                                                                return <TriangleResponseReading isUp={true}/>;
                                                            case "Yellow_down":
                                                                return <TriangleResponseReading isUp={false}/>;
                                                            case "Red_up":
                                                                return <RedResponse isUp={true}/>;
                                                            case "Red_down":
                                                                return <RedResponse isUp={false}/>;
                                                            default:
                                                                return column.format ? column.format(value) : null;
                                                        }
                                                    })()}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                rowsPerPageOptions={[5, 15, 25]}
                component="div"
                count={newState.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    "aria-label": "previous page"
                }}
                nextIconButtonProps={{
                    "aria-label": "next page"
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default StickyHeadTable;