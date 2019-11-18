/**
 * MedicationController contains functions to retrieve and add a patient's medication.
 * A specific drug can be retrieved by their assigned ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Medication;
import org.cradlePlatform.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class MedicationController {
    @Autowired
    private MedicationRepository medicationRepository;

    // GET mappings

//    /**
//     * Get all Medications associated with a DrugHistory by DrugHistoryId
//     * @param drugHistoryId
//     * @return Array of Medications
//     */
//    @GetMapping(path="/api/medications")
//    public Iterable<Medication> getParentDrugHistoryById(@RequestParam int drugHistoryId) {
//        return medicationRepository.findByDrugHistoryId(drugHistoryId);
//    }

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
}
