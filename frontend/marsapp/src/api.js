/**
 * Summary:
 *  Handles the API calls
 */

import axios from "axios/dist/axios"

const host = "localhost";
const port = "8080";

export default {
    admin:{
        getAdminById: data => {
            axios.get(`http://${host}:${port}/api/admins/${data.id}`)
        },
        createAdmin:data => axios.post(`http://${host}:${port}/api/admins` , {data}),
        getAllAdmins : axios.get(`http://${host}:${port}/api/admins`)
    },
    user: {
        login: credential => axios.get(`http://${host}:${port}/api/login?username=${credential.username}&password=${credential.password}`, {credential}),
        getAllUsers:data=> axios.get(`http://${host}:${port}/api/users`),
        getUserById:data=> axios.get(`http://${host}:${port}/api/users/${data.userId}`),
        createUser:data=> axios.post(`http://${host}:${port}/api/users`, {data}),
    },
    vht:{
        getAllVHT: data => axios.get(`http://${host}:${port}/api/vht`),
        getVHTById: data => axios.get(`http://${host}:${port}/api/vht/${data.vhtId}`),
        createVHT: data => axios.post(`http://${host}:${port}/api/vht` , {data})
    },
    userInfo:{
        getUserInfoById:data=> axios.get(`http://${host}:${port}/api/user-information/${data.userId}`),
        createUserInformation:data=> axios.post(`http://${host}:${port}/api/user-information` , {data}),
    },
    patient: {
        getAllPatients: data => axios.get(`http://${host}:${port}/api/patients`),
        getPatientById :data =>  axios.get(`http://${host}:${port}/api/patients/${data.id}`),
        getPatientsForVHT :data =>  axios.get(`http://${host}:${port}/api/vht/${data.vhtId}/patients`),
        createPatient :data =>  axios.psot(`http://${host}:${port}/api/patients` , {data}),

        mockPatients : data => axios.get(`http://${host}:${port}/VHT/1/patients`, {}).then(res => console.log(res)),
        mockPatient: data => axios.get(`http://${host}:${port}/VHT/${data}/patients/${data}`, {data}).then(res => console.log(res))
    },
    drug:{
        getAllDrugHistory:data=> axios.get(`http://${host}:${port}/api/drugHistories` , {data}),
        getDrugHistoryById:data=> axios.get(`http://${host}:${port}/api/drugHistories?${data.patientid}`),
        addDrgHistory:data=> axios.post(`http://${host}:${port}/api/drugHistories`, {data}),
    },
    reading:{
        addAReferral:data=> axios.post(`http://${host}:${port}/api/readings` , {data}),
        getReadingForPat:data=> axios.post(`http://${host}:${port}/api/readings?patientId=${data.patientId}&latest=${data.latest}`),

        mockReading: data =>axios.get(`http://${host}:${port}/VHT/{vhtId}/patients/{patientId}/reading` , {}).then(res => console.log(res)),
        uploadReading: data =>axios.post(`http://${host}:${port}/api/readings` , {}).then(res => console.log(res)),
        uploadSyncData: data =>axios.post(`http://${host}:${port}/api/sync` , {}).then(res => console.log(res)),

    },
    referral:{
        getAllReferral:data=> axios.get(`http://${host}:${port}/api/referrals` ),
        getReferralById:data=> axios.get(`http://${host}:${port}/api/referrals?referrerId=${data.id}`),
        createReferral:data=> axios.post(`http://${host}:${port}/api/referrals` , {data}),
    },
    medication:{
        mockMedication:data =>axios.get(`http://${host}:${port}/VHT/{vhtId}/patients/{patientId}/medication`,{}).then(res => console.log(res))
    },
    followUp: {
        getAllFollowUps:data=> axios.get(`http://${host}:${port}/api/followUps`),
        getFollowUpByPatientId:data=> axios.get(`http://${host}:${port}/api/followUps?patientId=${data.patientId}`),
        getLastFollowUpByPatientId:data=> axios.get(`http://${host}:${port}/api/followUps?patientId=${data.patientId}&latest=${true}`),
        addFollowUp:data=> axios.post(`http://${host}:${port}/api/followUps` , {data}),
        mockFollowUp:data => axios.get(`http://${host}:${port}/VHT/${data.vhtid}/patients/${data.patientid}/followup`, {data})

    },
    healthCareWorker:{
        getAllHealthWorkers:data=> axios.get(`http://${host}:${port}/api/healthWorkers`),
        getHealthWorkerById:data=> axios.get(`http://${host}:${port}/api/healthWorkers/${data.id}`),
        addNewHealthWorker:data=> axios.post(`http://${host}:${port}/api/healthWorkers` , {data}),
    },
    medicalHistory:{
        getAllMedicalHistories:data=> axios.get(`http://${host}:${port}/api/medicalHistories`),
        getLastMedicalHistoryByPatientId:data=> axios.get(`http://${host}:${port}/api/medicalHistories?patientId=${data.id}&latest=${data.latest}`),
        addMedicalHistory:data=> axios.post(`http://${host}:${port}/api/medicalHistories` , {data}),

        getAllMedication:data=> axios.get(`http://${host}:${port}/api/medications`),
        getMedicationForDrugHist:data=> axios.get(`http://${host}:${port}/api/medications?drugHistoryId=${data.id}`),
        addNewMedication:data=> axios.post(`http://${host}:${port}/api/medications?` , {data}),
    },
};