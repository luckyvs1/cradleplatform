import React, {Component} from 'react';
import axios from "axios/dist/axios"

export default {
    user: {
        hello: data => {
            axios.get("/hello").then(res => console.log(res))
        },
        login: data =>{
            axios.post("/login", {}).then(res => console.log(res))
        },
    },
    patient: {
        mockPatients : data =>{
            axios.get("/VHT/1/patients}", {}).then(res => console.log(res))
        },
        mockPatient: data => {
            axios.get("/VHT/{1}/patients/{1}", {}).then(res => console.log(res))
        }
    },

    reading:{
        mockReading: data =>{
            axios.get("/VHT/{vhtId}/patients/{patientId}/reading" , {}).then(res => console.log(res))
        },
        uploadReading: data =>{
            axios.post("/api/readings" , {}).then(res => console.log(res))
        },
        uploadSyncData: data =>{
            axios.post("/api/sync" , {}).then(res => console.log(res))
        },

    },
    medication:{
        mockMedication:data =>{
            axios.get("/VHT/{vhtId}/patients/{patientId}/medication",{}).then(res => console.log(res))
        }
    },
    followUp: {
        mockFollowUp:data =>{
            axios.get("/VHT/{vhtId}/patients/{patientId}/followup", {}).then(res => console.log(res))
        }
    }



};