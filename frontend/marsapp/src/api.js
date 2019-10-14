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
        getAllPatients: data => axios.get(`http://${host}:${port}/api/patients`, {data}),
        getPatientById :data =>  axios.get(`http://${host}:${port}/api/patients/${data.id}` , {data}),
        // addNewPatient : data => axios.get(`http://${host}:${port}`    TO BE DONE

        mockPatients : data =>{
            axios.get(`http://${host}:${port}/VHT/1/patients`, {}).then(res => console.log(res))
        },
        mockPatient: data => {
            axios.get(`http://${host}:${port}/VHT/${data}/patients/${data}`, {data}).then(res => console.log(res))
        }
    },
    admin:{
        addNewAdmin: data => {
            axios.post(`http://${host}:${port}/admin?id=${data.id}` , {data})
        },
        getAllAdmins : axios.get(`http://${host}:${port}/admin`)
    },

    drug:{
        getAllDrugHistory:data=> axios.get(`http://${host}:${port}/api/drugHistories` , {data}),
        getDrugHistoryById:data=> axios.get(`http://${host}:${port}/api/drugHistories/${data.patientid}` , {data}),
        addDrgHistory:data=> axios.post(`http://${host}:${port}/api/drugHistories?${data}`, {data}),
    },


    reading:{

        getAllReferral:data=> axios.get(`http://${host}:${port}/api/referrals` , {data}),
        getReferralById:data=> axios.get(`http://${host}:${port}/api/referrals/${data.id}` , {data}),
        addAReferral:data=> axios.post(`http://${host}:${port}/api/readings?${data}` , {data}),

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
    referral:{
        getAllDrugHistory:data=> axios.get(`http://${host}:${port}/api/drugHistories` , {data}),
        getDrugHistoryById:data=> axios.get(`http://${host}:${port}/api/drugHistories/${data.patientid}` , {data}),
        addDrgHistory:data=> axios.post(`http://${host}:${port}/api/drugHistories?${data}`, {data}),
    },
    medication:{
        mockMedication:data =>{
            axios.get(`http://${host}:${port}/VHT/{vhtId}/patients/{patientId}/medication`,{}).then(res => console.log(res))
        }
    },
    followUp: {
        getAllFollowUps:data=> axios.get(`http://${host}:${port}/api/followUps` , {data}),
        getFollowUpByPatientId:data=> axios.get(`http://${host}:${port}/api/followUps/${data.patientId}` , {data}),
        getLastFollowUpByPatientId:data=> axios.get(`http://${host}:${port}/api/followUps/latest/${data.patentId}` , {data}),
        addFollowUp:data=> axios.post(`http://${host}:${port}/api/followUps?${data}` , {data}),
        mockFollowUp:data =>{
            axios.get(`http://${host}:${port}/VHT/${data.vhtid}/patients/${data.patientid}/followup`, {data})
        }
    },
    healthCareWorker:{
        getAllHealthWorkers:data=> axios.get(`http://${host}:${port}/api/healthWorkers` , {data}),
        getHealthWorkerById:data=> axios.get(`http://${host}:${port}/api/healthWorkers/${data.id}` , {data}),
        addNewHealthWorker:data=> axios.post(`http://${host}:${port}/api/healthWorkers?${data}` , {data}),

    },
    medicalHistory:{
        getAllMedicalHistories:data=> axios.get(`http://${host}:${port}/api/medicalHistories` , {data}),
        getLastMedicalHistoryByPatientId:data=> axios.get(`http://${host}:${port}/api/medicalHistories/${data.id}` , {data}),
        addMedicalHistory:data=> axios.post(`http://${host}:${port}/api/medicalHistories?${data}` , {data}),
        getAllMedication:data=> axios.get(`http://${host}:${port}/api/medication` , {data}),
        getPatientById:data=> axios.get(`http://${host}:${port}/api/medication/${data.id}` , {data}),
        addNewMedication:data=> axios.post(`http://${host}:${port}/api/medication?${data}` , {data}),
    },



};