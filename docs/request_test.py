import requests
import json

# insert into Patient values ("1", "2", "AC", "F", "30", True, "month", "6");
# insert into Drug_History values (1, "1", "history stuff");

header = {'content-type': 'application/json'}
hellourl = 'http://localhost:8080/api/poop'
adminurl = 'http://localhost:8080/api/admins/2c9180ghjddd836db256a9016db259f42e0000'
userurl = 'http://localhost:8080/api/users'
paturl = 'http://localhost:8080/api/patients'
dhurl = 'http://localhost:8080/api/drugHistories'
dhparamurl = 'http://localhost:8080/api/drugHistory/test2'
followupurl = 'http://localhost:8080/api/followUp/3'
hwurl = 'http://localhost:8080/api/healthWorkers/'
mhurl = 'http://localhost:8080/api/medicalHistories/1'
medurl = 'http://localhost:8080/api/medications'
mhdata = {
    "patientId": "1",
    "medicalHistoryText": "gfhgfhfghffssss",
    "testText": "heyall"
}
meddata = {
    "drugHistoryID": "1",
    "drugName": "cannabis",
    "dosage": "once a day as needed",
    "startDate": "2019-09-26",
    "endDate": "2019-09-30"
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

# resp = requests.get(hellourl, headers=header)
# resp = requests.get(adminurl, data=json.dumps(admindata), headers=header)
# resp = requests.post(userurl, data=json.dumps(userdata), headers=header)
# resp = requests.post(dhurl, data=json.dumps(dhdata), headers=header)
# resp = requests.get(dhparamurl, data=json.dumps(dhdata), headers=header)
# resp = requests.get(followupurl, data=json.dumps(fudata), headers=header)
# resp = requests.get(hwurl, data=json.dumps(hwdata), headers=header)
# resp = requests.get(mhurl, data=json.dumps(mhdata), headers=header)
# resp = requests.get(paturl, data=json.dumps(dhdata), headers=header)
resp = requests.post(medurl, data=json.dumps(meddata), headers=header)
print(resp)
print(resp.status_code)
print(resp.text)