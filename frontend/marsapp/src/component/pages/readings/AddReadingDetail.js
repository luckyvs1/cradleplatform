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
import {Button, Col, Row} from "react-bootstrap";
import StopSignResponseReading from "../../utils/StopSignResponseReading";
import TriangleResponseReading from "../../utils/TriangleResponseReading";
import ConfirmAlert from "../../utils/ConfirmAlert";
import ErrorAlert from "../../utils/ErrorAlert";

class AddReadingDetail extends React.Component {
    // color => Yellow , Green , Red
    state = {
        isShow: false,
        isShowError: false,
        message: "",
        errorMsg: "",
        vitalsTrafficLight: "",
        needFollowUp: "",
        testNo: 0,
        currentColor: "",
        readyToSubmit: false,
        readingData: {
            readerId: null,
            patientId: null,
            timestamp: "",
            symptoms: "",
            otherSymptoms: "",
            systolicBloodPressure: 0,
            diastolicBloodPressure: 0,
            pulseRate: 0,
            notes: "",
            needFollowUp: false,
            appVersion: "",
            dateLastSaved: "",
            recheckVitalsDate: "",
            deviceInformation: "",
            gestationalAgeTimeUnit: "",
            gestationalAge: 3,
            manuallyChangedOcrResults: "",
            photoPath: "",
            totalOcrSeconds: 0.0,
            region: "",
            ocrEnabled: false,
            uploadImages: false,
            vitalsTrafficLight: "none",
            diagnosis: "none"
        },
    }


    submit = data => {
        this.setState({
            readingData:data
        })
        api.reading.processReading(data)
            .then(response => {
                this.setState({
                    vitalsTrafficLight: response.data.vitalsTrafficLight,
                    needFollowUp: response.data.needFollowUp
                })
                this.processRetest(this.state.testNo, this.state.vitalsTrafficLight);
                this.setState({
                    isShow:true
                })

                console.log("data", response);
            }).catch(error =>{
            if(error.response.status == 400){
                this.onShowAlert(error.response.data)
            }
        });
    }


    onShowAlert = (message) => {
        console.log(message)
        this.setState({
                isShowError: true,
                errorMsg: message
            },
            () => {
                window.setTimeout(() => {
                    this.setState({
                        isShowError: false,
                        errorMsg: message
                    })
                }, 2000)
            });
    }


    submitReading = data => {
        console.log(this.state.readingData);


        api.reading.addAReading(this.state.readingData).then(response =>{

        })



        this.setState({
            isShow: false,
            message: "",
            vitalsTrafficLight: "",
            needFollowUp: "",
            testNo: 0,
            currentColor: "",
            readyToSubmit:false
        })
    }



    processRetest = (testNo, color) => {
        switch (testNo) {
            case   0:
                if (color != "Green") {
                    this.processColorRetestStageZero(color);
                } else {
                    this.setState({
                        message: " Display Advice G",
                        currentColor: "",
                        testNo:0,
                        readyToSubmit:true,
                    })
                }
                break;
            case 1:
                if (!color.includes(this.state.currentColor)) {
                    this.processColorRetestStageOne(color);
                } else {
                    this.setState({
                        message: `Display advice for ${this.state.currentColor}`,
                        currentColor: "",
                        testNo:0,
                        readyToSubmit : true,
                    })
                }
                break;
            case 2:
                this.setState({
                    message: `Display advice for ${color}`,
                    currentColor: "",
                    testNo:0,
                    readyToSubmit:true,
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

                <br/>
                {this.state.readyToSubmit?

                    <Col className={"text-center"}>
                        <Button primary onClick={this.submitReading}>Submit Reading</Button>
                    </Col>
                    :
                    null
                }
                <br/>
                <ErrorAlert show={this.state.isShowError} message={this.state.errorMsg}></ErrorAlert>

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