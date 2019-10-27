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


@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044"})
@RestController
public class MedicationController {
    @Autowired
    private MedicationRepository medicationRepository;

    // GET mappings

    /**
     * Get all Medications associated with a DrugHistory by DrugHistoryId
     * @param drugHistoryId
     * @return Array of Medications
     */
    @GetMapping(path="/api/medications")
    public Iterable<Medication> getParentDrugHistoryById(@RequestParam int drugHistoryId) {
        return medicationRepository.findByDrugHistoryId(drugHistoryId);
    }

    /**
     * Get all Medications associated with a Patient
     * @param patientId
     * @return Array of Medications
     */
    @GetMapping(path="/api/patients/{patientId}/medications")
    public Iterable<Medication> getMedicationsByPatient(@PathVariable(value = "patientId") int patientId) {
        return medicationRepository.findMedicationsByDrugHistoryAndPatientId(patientId);
    }

    // POST mappings

    @PostMapping(path="/api/medications")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addNewMedication (@RequestBody Medication med) {
        Medication newMedication = new Medication();
        newMedication.setDrugHistoryId(med.getDrugHistoryId());
        newMedication.setDrugName(med.getDrugName());
        newMedication.setDosage(med.getDosage());
        newMedication.setStartDate(med.getStartDate());
        newMedication.setEndDate(med.getEndDate());
        medicationRepository.save(newMedication);
        return "Saved Medication";
    }
}
