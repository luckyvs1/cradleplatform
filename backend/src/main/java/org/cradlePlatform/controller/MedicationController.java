/**
 * MedicationController contains functions to retrieve and add a patient's medication.
 * A specific drug can be retrieved by their assigned ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Medication;
import org.cradlePlatform.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
@Transactional
public class MedicationController {
    @Autowired
    private MedicationRepository medicationRepository;

    // GET mappings

    /**
     * Get all Medications associated with a Patient
     * @param patientId
     * @return Array of Medications
     */
    @GetMapping(path="/api/patients/{patientId}/medications")
    public Iterable<Medication> getMedicationsByPatient(@PathVariable(value = "patientId") int patientId) {
        return medicationRepository.findMedicationsByPatientId(patientId);
    }

    // POST mappings

    @PostMapping(path="/api/medications")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addNewMedication (@RequestBody Medication med) {
        medicationRepository.save(med);
        return "Saved Medication";
    }

    // DELETE mappings

    @DeleteMapping(path = "/api/medications/{drugId}")
    public ResponseEntity<String> deleteSpecificMedication(@PathVariable(value = "drugId") int drugId) {

        if (medicationRepository.existsById(drugId)) {
            medicationRepository.deleteById(drugId);
            String responseMsg = "Deleted Drug with Id " + drugId + ".";
            return new ResponseEntity<String>(responseMsg, HttpStatus.OK);
        }else {
            String responseMsg = "Drug with ID " + drugId + " not found.";
            return new ResponseEntity<String>(responseMsg, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(path = "/api/patients/{patientId}/medications")
    public ResponseEntity<Void> deleteAllMedications(@PathVariable(value = "patientId") int patientId) {

        medicationRepository.deleteByPatientId(patientId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
