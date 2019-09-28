import requests
import json

header = {'content-type': 'application/json'}
url = 'http://localhost:8080/api/readings'
data = {"username": "supervht",
        "password": "hunter2",
        "reading": {
            "patientId": "123",
            "villageNumber": "321",
            "initials": "AA",
            "gestationalAge": {
                "age": 27,
                "timeUnit": "WEEKS",
            },
            "sex": "FEMALE",
            "isPregnant": True,
            "date": "2019-09-26",
            "symptoms": "headache",
            "systolic": 110,
            "diastolic": 90,
            "pulseRate": 80,
            "notes": "cool"
            },
        }

resp = requests.post(url, data=json.dumps(data), headers=header)
print(resp)
print(resp.status_code)
print(resp.text)