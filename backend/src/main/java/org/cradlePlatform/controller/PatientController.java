/**
 * PatientController contains API endpoints and functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.service.ValidationService;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.repository.PatientRepository;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ReadingRepository readingRepository;

    @Autowired
    private ValidationService validationService;

    // GET mappings

    /**
     * Get data for all patients
     * @return
     */
    @GetMapping(path="/api/patients")
    public @ResponseBody Iterable<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    /**
     * Get data for patient with matching patient id
     * @param patientId
     * @return
     */
    @GetMapping(path="/api/patients/{id}")
    public @ResponseBody
    Optional<Patient> getPatientById(@PathVariable(value = "id") int patientId) {
        return patientRepository.findById(patientId);
    }

    @GetMapping(path="/api/patients/{id}/readings")
    public @ResponseBody
    Iterable<Reading> getReadingByPatientId(@PathVariable(value = "id") int patientId,
                                            @RequestParam(value = "latest", required = false) boolean latest){
        if (latest) {
            return  readingRepository.findTopByPatientIdOrderByIdDesc(patientId);
        } else {
            return readingRepository.findReadingByPatientIdOrderByIdDesc(patientId);
        }
    }

    // POST mappings

    /**
     * Create a new patient
     * @param patient
     * @return
     */
    @PostMapping(path="/api/patients")
    @ResponseStatus(code = HttpStatus.CREATED)
    public @ResponseBody String addNewPatient (@RequestBody Patient patient){
        String validAttestationNo = validationService.getValidAttestationNo(patient);
        patient.setAttestationNo(validAttestationNo);
        patientRepository.save(patient);
        return "Saved Patient";
    }
}
