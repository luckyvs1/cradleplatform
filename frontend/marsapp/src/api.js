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
    admin: {
        getAdminById: data => {
            axios.get(`http://${host}:${port}/api/admins/${data.id}`)
        },
        createAdmin: data => axios.post(`http://${host}:${port}/api/admins`, {data}),
        getAllAdmins: axios.get(`http://${host}:${port}/api/admins`)
    },
    user: {
        login: (data) => axios.post(`http://${host}:${port}/api/users/login`, {
            username: data.username,
            password: data.password
        }),
        getAllUsers: data => axios.get(`http://${host}:${port}/api/users/`),
        getUserById: data => axios.get(`http://${host}:${port}/api/users/${data}`),
        createUser: (data, header) => axios.post(`http://${host}:${port}/api/users/`, data, header)
    },
    vht: {
        getAllVHT: data => axios.get(`http://${host}:${port}/api/vht`),
        getVHTById: data => axios.get(`http://${host}:${port}/api/vht/${data.vhtId}`),
        createVHT: data => axios.post(`http://${host}:${port}/api/vht`, {data}),
        transferVHT: (vhtId1, vhtId2) => axios.post(`http://${host}:${port}/api/vhts/transfer/${vhtId1}&${vhtId2}`)
    },
    userInfo: {
        getUserInfoById: data => axios.get(`http://${host}:${port}/api/user-information/${data}`),
        getAllUserInfo: data => axios.get(`http://${host}:${port}/api/user-information`),
        createUserInfo: (data, header) => axios.post(`http://${host}:${port}/api/user-information`, data, header),
        updateUserInfo: (data, header) => axios.post(`http://${host}:${port}/api/user-information`, data, header)
    },
    patient: {
        getAllPatients: data => axios.get(`http://${host}:${port}/api/patients`),
        getPatientById: data => axios.get(`http://${host}:${port}/api/patients/${data.id}`),
        getPatientsForVHT: data => axios.get(`http://${host}:${port}/api/vht/${data.vhtId}/patients`),
        createPatient: data => axios.post(`http://${host}:${port}/api/patients`, data,
            {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }),
    },
    drug: {
        getAllDrugHistory: data => axios.get(`http://${host}:${port}/api/drug-notes`, data),
        getDrugHistoryByPatientId: data => axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/drug-notes`),
        addDrugHistory: data => axios.post(`http://${host}:${port}/api/drug-notes`, data),
        getDrugNoteById: data => axios.get(`http://${host}:${port}/api/drug-notes/${data.id}`),
        deleteDrugNote: data => axios.delete(`http://${host}:${port}/api/drug-notes/${data.id}`)
    },
    reading: {
        addAReferral: data => axios.post(`http://${host}:${port}/api/readings`, {data}),
        addAReading: data => axios.post(`http://${host}:${port}/api/readings`, data),
        getReadingAdvice: data => axios.get(`http://${host}:${port}/api/readings-advice/${data}`),
        processReading: data => axios.post(`http://${host}:${port}/api/readings-process`, data),
        getReadingForPatient: data => axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/readings?latest=${data.latest}`),
        getReadingById: data => axios.get(`http://${host}:${port}/api/readings/${data.readingid}`),
        uploadReading: data => axios.post(`http://${host}:${port}/api/readings`, {}).then(res => console.log(res)),
        uploadDiagnosis: (data, header) => axios.put(`http://${host}:${port}/api/readings/${data.readingid}/diagnosis`, data.diagnosis, header),
    },
    referral: {
        getAllReferral: data => axios.get(`http://${host}:${port}/api/referrals`),
        getReferralById: data => axios.get(`http://${host}:${port}/api/referrals/${data.id}`),
        createReferral: data => axios.post(`http://${host}:${port}/api/referrals`, {data}),
    },
    medication: {
        addAMedication: data => axios.post(`http://${host}:${port}/api/medications`, data,
            {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }),
        getMedications: data => axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/medications`),
        deleteAMedication: data => axios.delete(`http://${host}:${port}/api/medications/${data.drug_id}`),
        deleteAllPatientMedications: data => axios.delete(`http://${host}:${port}/api/patients/${data.patient_id}/medications`),

    },
    followUp: {
        getAllFollowUps: data => axios.get(`http://${host}:${port}/api/followUps`),
        getFollowUpByFollowUpId: data => axios.get(`http://${host}:${port}/api/followUps/${data.followUpId}`),
        getFollowUpByPatientId: data => axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/follow-ups?latest=${data.latest}`),
        addFollowUp: data => axios.post(`http://${host}:${port}/api/followUps`, data),

    },
    healthCareWorker: {
        getAllHealthWorkers: data => axios.get(`http://${host}:${port}/api/healthWorkers`),
        getHealthWorkerById: data => axios.get(`http://${host}:${port}/api/healthWorkers/${data.id}`),
        addNewHealthWorker: data => axios.post(`http://${host}:${port}/api/healthWorkers`, {data}),
    },
    medicalHistory: {
        getAllMedicalHistories: data => axios.get(`http://${host}:${port}/api/patients/${data.patient_id}/medical-notes`),
        addMedicalHistory: data => axios.post(`http://${host}:${port}/api/medical-notes`, data),
        getMedicalNoteById: data => axios.get(`http://${host}:${port}/api/medical-notes/${data.id}`),
        deleteMedicalNote: data => axios.delete(`http://${host}:${port}/api/medical-notes/${data.id}`)
    },
};
