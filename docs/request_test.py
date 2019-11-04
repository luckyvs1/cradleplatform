import requests
import json

# insert into User values ("1", "user1", "pass");
# insert into Patient values (1, "1234", "Mary", "Sue", "village0", "zone0", "house0", "block0", "tank0", "MS", "F", 26, "1993-01-05", True, "2019-06-01", "months", 3);
# insert into Drug_History values (1, "1", "history stuff");
# insert into Medical_History values (1, "1", "my medical history");

header = {'content-type': 'application/json'}
hellourl = 'http://localhost:8080/api/poop'
adminurl = 'http://localhost:8080/api/admins/2c9180ghjddd836db256a9016db259f42e0000'
userurl = 'http://localhost:8080/api/users'
paturl = 'http://localhost:8080/api/patients'
dhurl = 'http://localhost:8080/api/drugHistories'
dhparamurl = 'http://localhost:8080/api/drugHistories'
followupurl = 'http://localhost:8080/api/followUps?followUpId=1'
hwurl = 'http://localhost:8080/api/healthWorkers/'
mhurl = 'http://localhost:8080/api/medicalHistories?patientId=1&latest=true'
medurl = 'http://localhost:8080/api/medications?drugHistoryId=1'
fuurl = 'http://localhost:8080/api/followUps'
readingurl = "http://localhost:8080/api/readings"
hcrefurl = "http://localhost:8080/api/health-centre/healthfacility21/referrals"
medbypatienturl = "http://localhost:8080/api/patients/1/medications"
mhdata = {
    "patientId": "1",
    "medicalHistoryText": "gfhgfhfghffssss",
    "testText": "heyall"
}
patdata = {
    "attestationNo": "5",
    "firstName" : "Lou",
    "lastName" : "Lee",
    "villageNo" : "45",
    "zoneNo" : "100",
    "householdNo" : "401",
    "blockNo" : "201",
    "tankNo" : "301",
    "initials" : "LL",
    "sex" : "F",
    "age" : 23,
    "dob" : "2019-10-16",
    "pregnant" : 1,
    "gestationalStartDate" : "2019-09-28",
    "gestationAgeUnit" : "week",
    "currentGestationalAge" : 3
}
meddata = {
    "drugHistoryId": "1",
    "drugName": "tylenol",
    "dosage": "once a day as needed",
    "startDate": "2019-09-26",
    "endDate": "2019-09-30"
}
fudata = {
    "patientId": "1",
    "followUpNotes": "notes",
    "required": True,
    "frequency": "once a month",
    "diagnosis": "coolness",
    "treatment": "check up bupbup"
}
readingdata =  {
    "readings": [
        {
            "readerId": "1",
            "patientId": 1,
            "timestamp": "2019-01-01",
            "symptoms": "Feverish,Unwell",
            "otherSymptoms": "",
            "systolicBloodPressure": 135,
            "diastolicBloodPressure": 85,
            "pulseRate": 117,
            "notes": "some notes",
            "needFollowUp": False,
            "appVersion": "CRADLE1.0",
            "dateLastSaved": "2019-08-17T12:00.000Z",
            "recheckVitalsDate": "2019-08-17",
            "deviceInformation": "device stuff",
            "gestationalAgeTimeUnit": "months",
            "gestationalAge": 5,
            "manuallyChangedOcrResults": False,
            "photoPath": "/photos",
            "totalOcrSeconds": 0.1,
            "region": "myregion",
            "ocrEnabled": True,
            "uploadImages": False,
            "vitalsTrafficLight": "Green"
        },
        {
            "readerId": "1",
            "patientId": 2,
            "timestamp": "2019-01-01",
            "symptoms": "Headache,Unwell",
            "otherSymptoms": "",
            "systolicBloodPressure": 140,
            "diastolicBloodPressure": 90,
            "pulseRate": 117,
            "notes": "some notes",
            "needFollowUp": True,
            "appVersion": "CRADLE1.0",
            "dateLastSaved": "2019-08-17T12:00.000Z",
            "recheckVitalsDate": "2019-08-17",
            "deviceInformation": "device stuff",
            "gestationalAgeTimeUnit": "months",
            "gestationalAge": 5,
            "manuallyChangedOcrResults": False,
            "photoPath": "/photos",
            "totalOcrSeconds": 0.1,
            "region": "myregion",
            "ocrEnabled": True,
            "uploadImages": False,
            "vitalsTrafficLight": "Yellow_up"
        }
    ]
}

# admindata = {
    #     "id": "2c91808fvhjfhj36db256a9016db259f42e0000",
    # }
    # userdata = {
    #     "username": "userguy",
    #     "password": "hunter2"
    # }
    # dhdata = {
    #     "patientId": "1",
    #     "historyText": "Stuffdfgdfgdfgdfrgdfgdfgdf"
    # }
    # fudata = {
    #     "patientId": "ggg",
    #     "followUpNotes": "some more notes",
    #     "required": True,
    #     "frequency": "once every two weeks",
    #     "diagnosis": "seems gojkjkod!!!",
    #     "treatment": "slkkkhkeep"
    # }
    # hwdata = {
    #     "id": "user1",
    #     "username": "afaf",
    #     "password": "babab"
    # }


# resp = requests.get(hellourl, headers=header)
# resp = requests.get(adminurl, data=json.dumps(admindata), headers=header)
# resp = requests.post(userurl, data=json.dumps(userdata), headers=header)
# resp = requests.post(dhurl, data=json.dumps(dhdata), headers=header)
# resp = requests.get(dhparamurl, headers=header)
# resp = requests.get(followupurl, data=json.dumps(fudata), headers=header)
# resp = requests.get(hwurl, data=json.dumps(hwdata), headers=header)
# resp = requests.get(mhurl, data=json.dumps(mhdata), headers=header)
# resp = requests.get(paturl, data=json.dumps(dhdata), headers=header)
# resp = requests.post(medurl, data=json.dumps(meddata), headers=header)
# resp = requests.post(paturl, data=json.dumps(patdata), headers=header)
# resp = requests.get(fuurl, data=json.dumps(fudata), headers=header)
# resp = requests.post(readingurl, data=json.dumps(readingdata), headers=header)
# resp = requests.get(hcrefurl, headers=header)
resp = requests.get(medbypatienturl, headers=header)

print(resp)
print(resp.status_code)
print(resp.text)


# url = 'http://localhost:8080/api/readings'
# data = {
#         "username": "supervht",
#         "password": "hunter2",
#         "readings": [
#             {
#                 "patientId": "123",
#                 "villageNumber": "321",
#                 "initials": "AA",
#                 "gestationalAge": {
#                     "age": 27,
#                     "timeUnit": "WEEKS"
#                 },
#                 "sex": "FEMALE",
#                 "isPregnant": True,
#                 "date": "2019-09-26",
#                 "symptoms": "headache",
#                 "systolic": 110,
#                 "diastolic": 90,
#                 "pulseRate": 80,
#                 "notes": "cool"
#             },
#             {
#                 "patientId": "1235",
#                 "villageNumber": "3215",
#                 "initials": "AB",
#                 "gestationalAge": {
#                     "age": 27,
#                     "timeUnit": "WEEKS"
#                 },
#                 "sex": "FEMALE",
#                 "isPregnant": True,
#                 "date": "2019-09-26",
#                 "symptoms": "headache",
#                 "systolic": 110,
#                 "diastolic": 90,
#                 "pulseRate": 80,
#                 "notes": "coolcool"
#             }
#             ]
#        }