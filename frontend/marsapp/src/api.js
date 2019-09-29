/**
 * Summary:
 *  Handles the API calls
 */

import React, {Component} from 'react';
import axios from "axios/dist/axios"



const host = "localhost";
const port = "8080";


export default {
    user: {
        hello: () => {
            axios.get(`http://${host}:${port}/hello`).then(res => console.log(res))
        },

        login: credential => axios.post(`http://${host}:${port}/login`, {credential}).then((res => res.data.user))
,
    },
    patient: {
        mockPatients : data =>{
            axios.get(`http://${host}:${port}/VHT/1/patients`, {}).then(res => console.log(res))
        },
        mockPatient: data => {
            axios.get(`http://${host}:${port}/VHT/{1}/patients/{1}`, {}).then(res => console.log(res))
        }
    },

    reading:{
        mockReading: data =>{
            axios.get(`http://${host}:${port}/VHT/{vhtId}/patients/{patientId}/reading` , {}).then(res => console.log(res))
        },
        uploadReading: data =>{
            axios.post(`http://${host}:${port}/api/readings` , {}).then(res => console.log(res))
        },
        uploadSyncData: data =>{
            axios.post(`http://${host}:${port}/api/sync` , {}).then(res => console.log(res))
        },

    },
    medication:{
        mockMedication:data =>{
            axios.get(`http://${host}:${port}/VHT/{vhtId}/patients/{patientId}/medication`,{}).then(res => console.log(res))
        }
    },
    followUp: {
        mockFollowUp:data =>{
            axios.get(`http://${host}:${port}/VHT/{vhtId}/patients/{patientId}/followup`, {}).then(res => console.log(res))
        }
    }



};