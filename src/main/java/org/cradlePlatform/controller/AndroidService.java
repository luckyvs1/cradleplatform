/**
 * AndroidService handles interfacing with the CRADLE Android app, and sending and receiving data
 * to and from it.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.model.SyncDataWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AndroidService {

	/**
	 * Receive a single reading from a VHT's Cradle Android app.
	 * @param reading The incoming reading.
	 */
	@PostMapping(path = "/api/readings", consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public void uploadReading(@RequestBody ReadingUploadWrapper reading) {
		System.out.printf("%s %s %s %s%n", reading.getUsername(), reading.getReading().getPatientId(), reading.getReading().getGestationalAge().getTimeUnit(), reading.getReading().getDate());
		if (DBService.verifyUsernamePassword(reading.getUsername(), reading.getPassword())) {
			// TODO: raise exception if save fails
			DBService.saveReadingInDb(reading.getReading());
		}
	}

	/**
	 * Receive patient, referral, and follow-up data from a VHT's Cradle Android app
	 * during a server-app sync process.
	 */
	@PostMapping(path = "/api/sync", consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public void uploadSyncData(@RequestBody SyncDataWrapper data) {

	}

    /**
     * Returns patients associated with a VHT if the vhtId is valid.
     *
     * @param vhtId vht ID
     * @return Patients JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients")
    @ResponseStatus(HttpStatus.OK)
    public String mockPatients(@PathVariable String vhtId) {
        return ("[\n" +
                " {\n" +
                "  \"patientId\": \"1234\",\n" +
                "  \"villageNumber\": \"12\",\n" +
                "  \"initials\": \"ab\",\n" +
                "  \"age\": \"32\",\n" +
                "  \"gestationalAge\": {\n" +
                "    \"age\": \"12\",\n" +
                "    \"timeUnit\": \"week\"\n" +
                "  },\n" +
                "  \"sex\": \"F\",\n" +
                "  \"pregnant\": true,\n" +
                "  \"timestamp\": \"2019-09-30 18:00:01\",\n" +
                "  \"readings\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true,\n" +
                "      \"headache\": false,\n" +
                "      \"blurredVision\": false,\n" +
                "      \"abdominalPain\": false,\n" +
                "      \"feverish\": false,\n" +
                "      \"unwell\": false\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"2019-09-30 18:10:01\"\n" +
                "  },\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"medicationName\": \"test\",\n" +
                "    \"dosage\": \"once a day\",\n" +
                "    \"startDate\": \"2019-08-22\",\n" +
                "    \"endDate\": \"2019-9-22\"\n" +
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
                "  \"initials\": \"cd\",\n" +
                "  \"age\": \"72\",\n" +
                "  \"gestationalAge\": {\n" +
                "    \"age\": \"0\",\n" +
                "    \"timeUnit\": \"none\"\n" +
                "  },\n" +
                "  \"sex\": \"M\",\n" +
                "  \"pregnant\": false,\n" +
                "  \"timestamp\": \"2019-09-30 18:20:01\",\n" +
                "  \"readings\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true,\n" +
                "      \"headache\": false,\n" +
                "      \"blurredVision\": false,\n" +
                "      \"abdominalPain\": false,\n" +
                "      \"feverish\": false,\n" +
                "      \"unwell\": false\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"2019-09-30 18:40:01\"\n" +
                "  },\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"medicationName\": \"test2\",\n" +
                "    \"dosage\": \"once a day\",\n" +
                "    \"startDate\": \"2019-09-22\",\n" +
                "    \"endDate\": \"2019-9-25\"\n" +
                "  },\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"1\",\n" +
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
     * @return Patient JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}")
    @ResponseStatus(HttpStatus.OK)
    public String mockPatient(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"patientId\": \"5678\",\n" +
                "  \"villageNumber\": \"12\",\n" +
                "  \"initials\": \"cd\",\n" +
                "  \"age\": \"72\",\n" +
                "  \"gestationalAge\": {\n" +
                "    \"age\": \"0\",\n" +
                "    \"timeUnit\": \"none\"\n" +
                "  },\n" +
                "  \"sex\": \"M\",\n" +
                "  \"pregnant\": false,\n" +
                "  \"timestamp\": \"2019-09-30 18:00:01\",\n" +
                "  \"readings\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true,\n" +
                "      \"headache\": false,\n" +
                "      \"blurredVision\": false,\n" +
                "      \"abdominalPain\": false,\n" +
                "      \"feverish\": false,\n" +
                "      \"unwell\": false\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"2019-09-30 18:40:01\"\n" +
                "  },\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"medicationName\": \"test2\",\n" +
                "    \"dosage\": \"once a day\",\n" +
                "    \"startDate\": \"2019-09-22\",\n" +
                "    \"endDate\": \"2019-9-25\"\n" +
                "  },\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"1\",\n" +
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
                "  \"readings\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"patientId\": \"1234\",\n" +
                "    \"symptoms\": {\n" +
                "      \"noSymptoms\": true,\n" +
                "      \"headache\": false,\n" +
                "      \"blurredVision\": false,\n" +
                "      \"abdominalPain\": false,\n" +
                "      \"feverish\": false,\n" +
                "      \"unwell\": false\n" +
                "    },\n" +
                "    \"systolicBP\": \"70\",\n" +
                "    \"diastolicBP\": \"85\",\n" +
                "    \"pulseRate\": \"90\",\n" +
                "    \"needFollowup\": false,\n" +
                "    \"notes\": \"N/A\",\n" +
                "    \"timeStamp\": \"2019-09-30 18:40:01\"\n" +
                "  },\n" +
                "}");
    }

    /**
     * Returns medication information for a patient associated with a VHT if the vhtId is valid and the patientId is valid.
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return Medication JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}/medication")
    @ResponseStatus(HttpStatus.OK)
    public String mockMedication(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"medications\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"patientId\": \"1234\",\n" +
                "    \"medicationName\": \"test\",\n" +
                "    \"dosage\": \"once a day\",\n" +
                "    \"startDate\": \"2019-08-22\",\n" +
                "    \"endDate\": \"2019-9-22\"\n" +
                "  },\n" +
                "}");
    }

    /**
     * Returns follow up information for a patient associated with a VHT if the vhtId is valid and the patientId is valid.
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return Follow up JSON body with status code 200 if successful, else status code 400
     */
    @GetMapping("/VHT/{vhtId}/patients/{patientId}/followup")
    @ResponseStatus(HttpStatus.OK)
    public String mockFollowUp(@PathVariable String vhtId, @PathVariable String patientId) {
        return ("{\n" +
                "  \"followUp\": {\n" +
                "    \"id\": \"1\",\n" +
                "    \"patientId\": \"1234\",\n" +
                "    \"required\": false,\n" +
                "    \"frequency\": \"N/A\",\n" +
                "    \"diagnosis\": \"Asthma\",\n" +
                "    \"treatment\": \"N/A\",\n" +
                "    \"notes\": \"N/A\"\n" +
                "  }\n" +
                "}");
    }
}
