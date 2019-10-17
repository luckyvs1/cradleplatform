/**
 * PatientController contains API endpoints and functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.GestationalAgeTimeUnit;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Sex;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    /**
     * GET mappings (get and return patient data)
     */

    /**
     * Return a JSON or XML
     * @return
     */
    @GetMapping(path="/api/patients")
    public @ResponseBody Iterable<Patient> getAllPatients(){
        //this returns a JSON or XML with the patients
        return patientRepository.findAll();
    }

    @GetMapping(path="/api/patient/{id}")
    public @ResponseBody
    Optional<Patient> getPatientById(@PathVariable(value = "id") String patientId){
        return patientRepository.findById(patientId);
    }

    /**
     * POST mappings (upload and save patient data)
     */

    @GetMapping(path="/api/poop")
    public @ResponseBody String afaf ()
    {
        return "hi";
    }

    /**
     * Add a new patient to the db via data sent in request body.
     * @param id
     * @param villageNo
     * @param initials
     * @param sex
     * @param age
     * @param pregnant
     * @param gestationAgeUnit
     * @param gestationAge
     * @return
     */
    @GetMapping(path="/api/eya")
    public @ResponseBody String addNewPatient (@RequestBody String villageNo ){
        Patient newPatient = new Patient();
        newPatient.setVillageNo("123");
        patientRepository.save(newPatient);
        return villageNo;
//        return villageNo;
//        newPatient.setId(patient.getId());
//        newPatient.setAge(patient.getAge());
//        newPatient.setGestationAge(patient.getGestationAge());
//        newPatient.setGestationAgeUnit(patient.getGestationAgeUnit());
//        newPatient.setInitials(patient.getInitials());
//        newPatient.setPregnant(patient.isPregnant());
//        newPatient.setVillageNo(patient.getVillageNo());
//        newPatient.setSex(patient.getSex());

        // patientRepository.save(newPatient);
    }
//
//    @PostMapping(path="/api/poop")
//    public @ResponseBody String afad (@RequestParam String id) {
//        return id;
//    }

    /**
     * Returns mock data of multiple patients for testing purposes.
     * TODO: Delete when able to get real data.
     *
     * @param vhtId vht ID
     * @return Patients JSON body with fake patient data
     */
    public String mockPatients(String vhtId) {
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
     * Return mock data of a singular patient for testing purposes
     *
     * @param vhtId     vht ID
     * @param patientId patient ID
     * @return Patient JSON body
     */
    public String mockPatient(String vhtId, String patientId) {
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
}
