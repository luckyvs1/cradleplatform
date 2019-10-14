/**
 * Summary:
 *  Handles the API calls
 */

import axios from "axios/dist/axios"

const host = "localhost";
const port = "8080";

export default {
    user: {
        login: credential => axios.get(`http://${host}:${port}/api/login?username=${credential.username}&password=${credential.password}`, {credential})
    },
    patient: {
        mockPatients : data =>{
            axios.get(`http://${host}:${port}/VHT/1/patients`, {}).then(res => console.log(res))
        },
        mockPatient: data => {
            axios.get(`http://${host}:${port}/VHT/${data}/patients/${data}`, {data}).then(res => console.log(res))
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