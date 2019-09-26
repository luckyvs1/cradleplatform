/**
 * AndroidService handles interfacing with the CRADLE Android app, and sending and receiving data
 * to and from it.
 */
package org.cradlePlatform.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AndroidService {

    /**
     * Returns patients associated with a VHT if the vhtId is valid.
     *
     * @param vhtId vht ID
     * @return patients JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients")
    @ResponseStatus(HttpStatus.OK)
    public String mockPatients(@PathVariable String vhtId) {
        return ("[\n" +
                " {\n" +
                "  \"patientId\": \"1234\",\n" +
                "  \"villageNumber\": \"12\",\n" +
                "  \"initials\": \"ls\",\n" +
                "  \"age\": \"72\",\n" +
                "  \"gestationalAge\": {\n" +
                "    \"age\": \"0\",\n" +
                "    \"timeUnit\": \"1569483073\"\n" +
                "  },\n" +
                "  \"sex\": \"M\",\n" +
                "  \"pregnant\": false,\n" +
                "  \"timestamp\": \"1569483073\",\n" +
                "  \"readings\": {\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"1569483073\"\n" +
                "  },\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"medicationName\": \"test\",\n" +
                "    \"dosage\": \"once\",\n" +
                "    \"startDate\": \"11/12/2019\",\n" +
                "    \"endDate\": \"12/21/2019\"\n" +
                "  },\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"required\": false,\n" +
                "    \"frequency\": \"N/A\",\n" +
                "    \"diagnosis\": \"Asthma\",\n" +
                "    \"treatment\": \"N/A\",\n" +
                "    \"notes\": \"N/A\"\n" +
                "  }\n" +
                " },\n" +
                " {\n" +
                "  \"patientId\": \"5678\",\n" +
                "  \"villageNumber\": \"12\",\n" +
                "  \"initials\": \"ls\",\n" +
                "  \"age\": \"72\",\n" +
                "  \"gestationalAge\": {\n" +
                "    \"age\": \"0\",\n" +
                "    \"timeUnit\": \"1569483073\"\n" +
                "  },\n" +
                "  \"sex\": \"M\",\n" +
                "  \"pregnant\": false,\n" +
                "  \"timestamp\": \"1569483073\",\n" +
                "  \"readings\": {\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"1569483073\"\n" +
                "  },\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"medicationName\": \"test\",\n" +
                "    \"dosage\": \"once\",\n" +
                "    \"startDate\": \"11/12/2019\",\n" +
                "    \"endDate\": \"12/21/2019\"\n" +
                "  },\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"required\": false,\n" +
                "    \"frequency\": \"N/A\",\n" +
                "    \"diagnosis\": \"Asthma\",\n" +
                "    \"treatment\": \"N/A\",\n" +
                "    \"notes\": \"N/A\"\n" +
                "  }\n" +
                "  }\n" +
                "]");
    }

    /**
     * Returns a patient associated with a VHT if the vhtId is valid and the patientId is valid.
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return patient JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}")
    @ResponseStatus(HttpStatus.OK)
    public String mockPatient(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"patientId\": \"1234\",\n" +
                "  \"villageNumber\": \"12\",\n" +
                "  \"initials\": \"ls\",\n" +
                "  \"age\": \"72\",\n" +
                "  \"gestationalAge\": {\n" +
                "    \"age\": \"0\",\n" +
                "    \"timeUnit\": \"1569483073\"\n" +
                "  },\n" +
                "  \"sex\": \"M\",\n" +
                "  \"pregnant\": false,\n" +
                "  \"timestamp\": \"1569483073\",\n" +
                "  \"readings\": {\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"1569483073\"\n" +
                "  },\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"medicationName\": \"test\",\n" +
                "    \"dosage\": \"once\",\n" +
                "    \"startDate\": \"11/12/2019\",\n" +
                "    \"endDate\": \"12/21/2019\"\n" +
                "  },\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"required\": false,\n" +
                "    \"frequency\": \"N/A\",\n" +
                "    \"diagnosis\": \"Asthma\",\n" +
                "    \"treatment\": \"N/A\",\n" +
                "    \"notes\": \"N/A\"\n" +
                "  }\n" +
                "}");
    }

    /**
     * Returns reading information for a patient associated with a VHT if the vhtId is valid and the patientId is valid.
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return reading JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}/reading")
    @ResponseStatus(HttpStatus.OK)
    public String mockReading(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"patientId\": \"1234\",\n" +
                "  \"readings\": {\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"1569483073\"\n" +
                "  },\n" +
                "}");
    }

    /**
     * Returns reading information for a patient associated with a VHT if the vhtId is valid and the patientId is valid.
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return reading JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}/medication")
    @ResponseStatus(HttpStatus.OK)
    public String mockMedication(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"patientId\": \"1234\",\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"medicationName\": \"test\",\n" +
                "    \"dosage\": \"once\",\n" +
                "    \"startDate\": \"11/12/2019\",\n" +
                "    \"endDate\": \"12/21/2019\"\n" +
                "  },\n" +
                "}");
    }

    /**
     * Returns reading information for a patient associated with a VHT if the vhtId is valid and the patientId is valid.
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return reading JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}/followup")
    @ResponseStatus(HttpStatus.OK)
    public String mockFollowUp(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"patientId\": \"1234\",\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"100\",\n" +
                "    \"required\": false,\n" +
                "    \"frequency\": \"N/A\",\n" +
                "    \"diagnosis\": \"Asthma\",\n" +
                "    \"treatment\": \"N/A\",\n" +
                "    \"notes\": \"N/A\"\n" +
                "  }\n" +
                "}");
    }
}
