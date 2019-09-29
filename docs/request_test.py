import requests
import json

header = {'content-type': 'application/json'}
url = 'http://localhost:8080/api/referrals'
data = {
        "reading": {
            "patientId": "123",
            "villageNumber": "321",
            "initials": "AA",
            "gestationalAge": {
                "age": 27,
                "timeUnit": "WEEKS"
            },
            "sex": "FEMALE",
            "isPregnant": True,
            "date": "2019-09-26 00:10:23",
            "symptoms": "headache",
            "systolic": 110,
            "diastolic": 90,
            "pulseRate": 80,
            "notes": "cool"
        },
        "referrerName": "me",
        "username": "supervht",
        "password": "hunter2",
        "healthCentre": "Cool Health Centre",
        "trafficLight": "RED_ARROW_UP",
        "vitalsMessage": "In severe shock",
        "comment": "Just kidding"
    }

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

resp = requests.post(url, data=json.dumps(data), headers=header)
print(resp)
print(resp.status_code)
print(resp.text)