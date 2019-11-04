/**
 * Class: AddReadingDetail
 * Summary:
 *  Base file for showing contents of Add Reading page.
 */

import React from "react";
import {connect} from "react-redux";
import AddReadingForm from "../../forms/readingForm/AddReadingForm";
import api from "../../../api";
import GreenResponseReading from "../../utils/GreenResponseReading";
import {Col} from "react-bootstrap";
import StopSignResponseReading from "../../utils/StopSignResponseReading";
import TriangleResponseReading from "../../utils/TriangleResponseReading";

class AddReadingDetail extends React.Component {
    // color => Yellow , Green , Red
    state = {
        isShow: false,
        message: "",
        vitalsTrafficLight: "",
        needFollowUp: "",
        testNo: 0,
        currentColor: ""
    }
    submit = data => {
        api.reading.processReading(data)
            .then(response => {
                this.setState({
                    vitalsTrafficLight: response.data.vitalsTrafficLight,
                    needFollowUp: response.data.needFollowUp
                })

                this.processRetest(this.state.testNo, this.state.vitalsTrafficLight);
                this.onShowAlert()

                console.log("data", response);
            });
    }
    // needed later
    onShowAlert = () => {
        this.setState({
            isShow: true,
        });
    }


    processRetest = (testNo, color) => {
        switch (testNo) {
            case   0:
                if (color != "Green") {
                    this.processColorRetestStageZero(color);
                } else {
                    this.setState({
                        message: " Display Advice G",
                        currentColor: "Green"
                    })
                }
                break;
            case 1:
                if (!color.includes(this.state.currentColor)) {
                    this.processColorRetestStageOne(color);
                } else {
                    this.setState({
                        message: `Display advice for ${this.state.currentColor}`
                    })
                }
                break;
            case 2:
                this.setState({
                    message: `Display advice for ${color}`
                })

                break;
        }
    }


    processColorRetestStageZero = (color) => {
        switch (color) {
            case "Green":
                break;
            case "Yellow_up":
                this.setState({
                    message: " Retest After 15m ++++ Yellow FIRST TEST",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_down":
                this.setState({
                    message: " Retest After 15m ++++ Yellow FIRST TEST",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_up":
                this.setState({
                    message: " Retest immediately +++++  Red FIRST TEST",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_down":
                this.setState({
                    message: " Retest immediately +++++  Red FIRST TEST",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
        }
    }


    processColorRetestStageOne = (color) => {
        switch (color) {
            case "Green":
                this.setState({
                    message: " Retest Green  immediately (OR USE UR BRAIN) +++++   SECOND TEST ",
                    currentColor: "Green",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_up":
                this.setState({
                    message: " Retest  immediately +++++ Yellow SECOND TEST",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_down":
                this.setState({
                    message: " Retest   immediately +++++  Yellow SECOND TEST",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_up":
                this.setState({
                    message: " Retest immediately +++++ Red SECOND TEST",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_down":
                this.setState({
                    message: " Retest immediately +++++ Red SECOND TEST",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
        }
    }

    render() {
        return (
            <di>
                <AddReadingForm submit={this.submit}></AddReadingForm>
                {this.state.vitalsTrafficLight == "Green" ?
                    <GreenResponseReading show={this.state.isShow}
                                          message={this.state.message}></GreenResponseReading> :
                    null
                }
                {
                    this.state.vitalsTrafficLight == "Yellow_up" ?
                        <TriangleResponseReading show={this.state.isShow}
                                                 message={this.state.message}
                                                 isUp={true}></TriangleResponseReading> : null
                }
                {
                    this.state.vitalsTrafficLight == "Yellow_down" ?
                        <TriangleResponseReading show={this.state.isShow}
                                                 message={this.state.message}
                                                 isUp={false}></TriangleResponseReading> : null

                }
                {
                    this.state.vitalsTrafficLight == "Red_up" ?
                        <StopSignResponseReading show={this.state.isShow}
                                                 message={this.state.message}
                                                 isUp={true}></StopSignResponseReading> : null
                }
                {
                    this.state.vitalsTrafficLight == "Red_down" ?
                        <StopSignResponseReading show={this.state.isShow}
                                                 message={this.state.message}
                                                 isUp={false}></StopSignResponseReading> : null

                }
            </di>
        );
    }
}

export default (AddReadingDetail);