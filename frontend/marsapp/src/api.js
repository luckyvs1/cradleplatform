/**
 * Summary:
 *  Handles the API calls
 */

import axios from "axios/dist/axios"

let host = "";
let port = "";
const PRODUCTION_ENVIRONMENT = "production";

if (process.env.NODE_ENV === PRODUCTION_ENVIRONMENT) {
    host = "cmpt373.csil.sfu.ca";
    port = "8084";
} else {
    host = "localhost";
    port = "8080";
}

export default {
    admin:{
        getAdminById: data => {
            axios.get(`http://${host}:${port}/api/admins/${data.id}`)
        },
        createAdmin:data => axios.post(`http://${host}:${port}/api/admins` , {data}),
        getAllAdmins : axios.get(`http://${host}:${port}/api/admins`)
    },
    user: {
        login: (data) => axios.post(`http://${host}:${port}/api/users/login`, {username:data.username,password:data.password}),
        getAllUsers:data=> axios.get(`http://${host}:${port}/api/users/`),
        getUserById:data=> axios.get(`http://${host}:${port}/api/users/${data}`),
        createUser:(data, header) => axios.post(`http://${host}:${port}/api/users/`, data, header)
    },
    vht:{
        getAllVHT: data => axios.get(`http://${host}:${port}/api/vht`),
        getVHTById: data => axios.get(`http://${host}:${port}/api/vht/${data.vhtId}`),
        createVHT: data => axios.post(`http://${host}:${port}/api/vht` , {data})
    },
    userInfo:{
        getUserInfoById:data=> axios.get(`http://${host}:${port}/api/user-information/${data}`),
        getAllUserInfo:data=> axios.get(`http://${host}:${port}/api/user-information`),
        createUserInfo:(data, header) => axios.post(`http://${host}:${port}/api/user-information`, data, header),
        updateUserInfo:(data, header) => axios.post(`http://${host}:${port}/api/user-information`, data, header)
    },
    patient: {
        getAllPatients: data => axios.get(`http://${host}:${port}/api/patients`),
        getPatientById :data =>  axios.get(`http://${host}:${port}/api/patients/${data.id}`),
        getPatientsForVHT :data =>  axios.get(`http://${host}:${port}/api/vht/${data.vhtId}/patients`),
        createPatient :data =>  axios.post(`http://${host}:${port}/api/patients` , data,
            {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }}),
    },
    drug:{
        getAllDrugHistory:data=> axios.get(`http://${host}:${port}/api/drugHistories` , {data}),
        getDrugHistoryByPatientId:data=> axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/drugHistories`),
        addDrugHistory:data=> axios.post(`http://${host}:${port}/api/drugHistories`, data),
    },
    reading:{
        addAReferral:data=> axios.post(`http://${host}:${port}/api/readings` , {data}),
        addAReading: data => axios.post(`http://${host}:${port}/api/readings`, data),
        getReadingAdvice: data => axios.get(`http://${host}:${port}/api/readings-advice/${data}`),
        processReading: data => axios.post(`http://${host}:${port}/api/readings-process`, data),
        getReadingForPatient:data=> axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/readings?latest=${data.latest}`),
        uploadReading: data =>axios.post(`http://${host}:${port}s/api/readings` , {}).then(res => console.log(res)),
    },
    referral:{
        getAllReferral:data=> axios.get(`http://${host}:${port}/api/referrals` ),
        getReferralById:data=> axios.get(`http://${host}:${port}/api/referrals?referrerId=${data.referrerId}`),
        createReferral:data=> axios.post(`http://${host}:${port}/api/referrals` , {data}),
    },
    medication:{
        deleteAllPatientMedications:data=> axios.delete(`http://${host}:${port}/api/patients/${data.patient_id}/medications/${data.drug_id}`),
        deleteAMedication:data=> axios.delete(`http://${host}:${port}/api/patients/${data.patient_id}/medications`),
    },
    followUp: {
        getAllFollowUps:data=> axios.get(`http://${host}:${port}/api/followUps`),
        getFollowUpByFollowUpId:data=> axios.get(`http://${host}:${port}/api/followUps/${data.followUpId}`),
        getFollowUpByPatientId:data=> axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/follow-ups?latest=${data.latest}`),
        addFollowUp:data=> axios.post(`http://${host}:${port}/api/followUps` , {data}),

    },
    healthCareWorker:{
        getAllHealthWorkers:data=> axios.get(`http://${host}:${port}/api/healthWorkers`),
        getHealthWorkerById:data=> axios.get(`http://${host}:${port}/api/healthWorkers/${data.id}`),
        addNewHealthWorker:data=> axios.post(`http://${host}:${port}/api/healthWorkers` , {data}),
    },
    medicalHistory:{
        getAllMedicalHistories:data=> axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/medicalHistories`),
        addMedicalHistory:data=> axios.post(`http://${host}:${port}/api/medicalHistories`, data),

        getAllMedication:data=> axios.get(`http://${host}:${port}/api/medications`),
        getMedicationForDrugHist:data=> axios.get(`http://${host}:${port}/api/medications?drugHistoryId=${data.id}`),
        addNewMedication:data=> axios.post(`http://${host}:${port}/api/medications?` , {data}),
    },
};