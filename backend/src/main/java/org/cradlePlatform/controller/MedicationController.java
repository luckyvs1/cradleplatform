/**
 * MedicationController contains functions to retrieve and add a patient's medication.
 * A specific drug can be retrieved by their assigned ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Medication;
import org.cradlePlatform.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
public class MedicationController {
    @Autowired
    private MedicationRepository medicationRepository;

    // GET mappings

    @GetMapping(path="/api/medications")
    public @ResponseBody Iterable<Medication> getAllMedication(){
        return medicationRepository.findAll();
    }

    /**
     * Get all Medications associated with a DrugHistory by DrugHistoryId
     * @param drugHistoryId
     * @return
     */
    @GetMapping(path="/api/medications/{drugHistoryId}")
    public @ResponseBody
    Iterable<Medication> getParentDrugHistoryById(@PathVariable(value = "drugHistoryId") int drugHistoryId){
        return medicationRepository.findByDrugHistoryId(drugHistoryId);
    }

    // POST mappings

    @PostMapping(path="/api/medications")
    public @ResponseBody String addNewMedication (@RequestBody Medication med) {
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
