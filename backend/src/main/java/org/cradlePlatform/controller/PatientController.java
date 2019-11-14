/**
 * PatientController contains API endpoints and functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.PatientRepository;
import org.cradlePlatform.repository.ReadingRepository;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    private DrugHistoryRepository drugHistoryRepository;

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
     * Create a new patient and associates the patient with a drug history id
     * @param patient
     * @return
     */
    @PostMapping(path="/api/patients")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<String> addNewPatient (@RequestBody Patient patient){
        if(patient.getAttestationNo() == null){
            return new ResponseEntity<String>("Attestation number can't be null", HttpStatus.BAD_REQUEST);
        }
        patientRepository.save(patient);

        // Attestation number can be empty so its not unique which would result in an iterable
        Iterable<Patient> patients = patientRepository.findPatientByAttestationNo(patient.getAttestationNo());

        for(Patient savedPatient: patients) {
            if(patient.equals(savedPatient)) {
                DrugHistory drugHistory = new DrugHistory();
                drugHistory.setPatientId(savedPatient.getId());
                drugHistoryRepository.save(drugHistory);
                return new ResponseEntity<String>("Patient and drug history id created", HttpStatus.CREATED);
            }
        }
        
        return new ResponseEntity<String>("Failed to create patient and drug history", HttpStatus.BAD_REQUEST);
    }
}
