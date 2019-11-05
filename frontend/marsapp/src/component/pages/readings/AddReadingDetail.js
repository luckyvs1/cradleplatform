/**
 * Class: AddReadingDetail
 * Summary:
 *  Base file for showing contents of Add Reading page.
 */

import React from "react";
import AddReadingForm from "../../forms/readingForm/AddReadingForm";
import api from "../../../api";
import GreenResponseReading from "../../utils/GreenResponseReading";
import {Button, Col} from "react-bootstrap";
import StopSignResponseReading from "../../utils/StopSignResponseReading";
import TriangleResponseReading from "../../utils/TriangleResponseReading";
import ErrorAlert from "../../utils/ErrorAlert";
import AdviceBox from "../../utils/AdviceBox"

class AddReadingDetail extends React.Component {
    // color => Yellow , Green , Red
    state = {
        isShow: false,
        isShowError: false,
        isShowAdvice:false,
        message: "",
        errorMsg: "",
        vitalsTrafficLight: "",
        needFollowUp: "",
        testNo: 0,
        currentColor: "",
        readyToSubmit: false,
        briefAdvice:"",
        communityAdvice:"",
        communityTreatment:"",
        hospitalAdvice:"",
        hospitalTreatment:"",
        adviceDetailsBullets:"",
        condition:"",
        advice:"",
        analysis:"",
        adviceDetails:"",
        readingData: {
            readerId: 1,
            patientId: 1,
            timestamp: "2019-09-08",
            symptoms: "No symptoms",
            otherSymptoms: "No other symptoms",
            systolicBloodPressure: 0,
            diastolicBloodPressure: 0,
            pulseRate: 0,
            notes: "No notes",
            needFollowUp: false,
            appVersion: "3",
            dateLastSaved: "2019-10-03",
            recheckVitalsDate: "2019-11-10",
            deviceInformation: "Unknown",
            gestationalAgeTimeUnit: "none",
            gestationalAge: 3,
            manuallyChangedOcrResults: "No",
            photoPath: "Unavailable",
            totalOcrSeconds: 0.0,
            region: "Unknown",
            ocrEnabled: false,
            uploadImages: false,
            vitalsTrafficLight: "",
            diagnosis: "none"
        },
    }


    submit = data => {
        this.setState({
            ...this.state,
            readingData: data
        })
        api.reading.processReading(data)
            .then(response => {
                this.setState({
                    ...this.state,
                    vitalsTrafficLight: response.data.vitalsTrafficLight,
                    needFollowUp: response.data.needFollowUp,
                    readingData: {
                        ...this.state.readingData,
                        vitalsTrafficLight: response.data.vitalsTrafficLight,
                        needFollowUp: response.data.needFollowUp
                    }
                })
                this.processRetest(this.state.testNo, this.state.vitalsTrafficLight);
                this.setState({
                    ...this.state,
                    isShow: true,
                    isShowAdvice:false,
                })
            }).catch(error => {
                if (error.response.status == 400) {
                    this.onShowAlert(error.response.data)
                }
        });
    }


    onShowAlert = (message) => {
        this.setState({
                ...this.state,
                isShowError: true,
                isShowAdvice:false,
                errorMsg: message
            },
            () => {
                window.setTimeout(() => {
                    this.setState({
                        ...this.state,
                        isShowError: false,
                        errorMsg: message
                    })
                }, 2000)
            });
    }


    submitReading = data => {
        this.setState({
            ...this.state,
            readingData :{
                ...this.state.readingData,
                vitalsTrafficLight: this.state.vitalsTrafficLight,
                needFollowUp: this.state.needFollowUp,
            }
        })

        api.reading.getReadingAdvice(this.state.vitalsTrafficLight).then(response=>{
            console.log(response);
            this.setState({
                ...this.state,
                briefAdvice:response.data.briefAdvice,
                adviceDetails:response.data.adviceDetails,
                communityAdvice:response.data.communityAdvice,
                communityTreatment:response.data.communityTreatment,
                hospitalAdvice:response.data.hospitalAdvice,
                hospitalTreatment:response.data.hospitalTreatment,
                adviceDetailsBullets:response.data.adviceDetailsBullets,
                condition:response.data.condition,
                analysis:response.data.analysis,
                advice:response.data.advice,
                isShowAdvice:true,
            })
        })

        api.reading.addAReading(this.state.readingData).catch(error=>{
            if (error.response.status == 400) {
                this.onShowAlert(error.response.data)
            }
        })


        this.setState({
            ...this.state,
            isShow: false,
            message: "",
            vitalsTrafficLight: "",
            needFollowUp: "",
            testNo: 0,
            currentColor: "",
            readyToSubmit: false,
            dataFromParent:true

        })
    }


    processRetest = (testNo, color) => {
        switch (testNo) {
            case   0:
                if (color != "Green") {
                    this.processColorRetestStageZero(color);
                } else {
                    this.setState({
                        ...this.state,
                        message: "Advice Will Be Displayed After Submission",
                        currentColor: "",
                        testNo: 0,
                        readyToSubmit: true,
                        dataFromParent:false,
                    })
                }
                break;
            case 1:
                if (!color.includes(this.state.currentColor)) {
                    this.processColorRetestStageOne(color);
                } else {
                    this.setState({
                        ...this.state,
                        message: `Advice Will Be Displayed After Submission`,
                        currentColor: "",
                        testNo: 0,
                        readyToSubmit: true,

                    })
                }
                break;
            case 2:
                this.setState({
                    ...this.state,
                    message: `Advice Will Be Displayed After Submission`,
                    currentColor: "",
                    testNo: 0,
                    readyToSubmit: true,
                })

                break;
        }
    }


    processColorRetestStageZero = (color) => {
        switch (color) {
            case "Green":
                this.setState({
                    ...this.state,
                    message: "please Retest Green  immediately" +
                        " (May use clinical judgement to decide that previous high reading was transient)",
                    currentColor: "Green",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_up":
                this.setState({
                    ...this.state,
                    message: "Please Retest After 15 minutes",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_down":
                this.setState({
                    ...this.state,
                    message: "Please Retest After 15 minutes",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_up":
                this.setState({
                    ...this.state,
                    message: "Please Retest immediately",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_down":
                this.setState({
                    ...this.state,
                    message: "Please Retest immediately",
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
                    ...this.state,
                    message: "please Retest Green  immediately" +
                        " (May use clinical judgement to decide that previous high reading was transient)",
                    currentColor: "Green",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_up":
                this.setState({
                    ...this.state,
                    message: "Please Retest immediately",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Yellow_down":
                this.setState({
                    ...this.state,
                    message: "Please Retest immediately",
                    currentColor: "Yellow",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_up":
                this.setState({
                    ...this.state,
                    message: "Please Retest immediately",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
            case "Red_down":
                this.setState({
                    ...this.state,
                    message: "Please Retest immediately",
                    currentColor: "Red",
                    testNo: this.state.testNo + 1
                })
                break;
        }
    }

    render() {
        return (
            <di>
                <AddReadingForm submit={this.submit}   dataFromParent = {!this.state.readyToSubmit }></AddReadingForm>

                <br/>
                {this.state.readyToSubmit ?

                    <Col className={"text-center"}>
                        <Button primary onClick={this.submitReading}>Submit Reading</Button>
                    </Col>
                    :
                    null
                }
                <ErrorAlert show={this.state.isShowError} message={this.state.errorMsg}></ErrorAlert>
                <AdviceBox show={this.state.isShowAdvice}
                           briefAdvice={this.state.briefAdvice}
                           adviceDetails={this.state.adviceDetails}
                           communityAdvice ={this.state.communityAdvice }
                           communityTreatment ={this.state.communityTreatment }
                           hospitalAdvice ={this.state.hospitalAdvice }
                           hospitalTreatment ={this.state.hospitalTreatment }
                           adviceDetailsBullets ={this.state.adviceDetailsBullets }
                           condition ={this.state.condition }
                           advice ={this.state.advice }
                           analysis ={this.state.analysis }
                ></AdviceBox>

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