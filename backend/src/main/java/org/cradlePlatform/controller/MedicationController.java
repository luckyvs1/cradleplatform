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
@CrossOrigin(origins = { "http://localhost:3000"})
@Controller
public class MedicationController {
    @Autowired
    private MedicationRepository medicationRepository;

    @PostMapping(path="/medication")
    public @ResponseBody String addNewMedication (@RequestParam int drugHistoryId,
                                                  @RequestParam String drugName,
                                                  @RequestParam String dosage,
                                                  @RequestParam Date startDate,
                                                  @RequestParam Date endDate){
        Medication newMedication = new Medication();
        newMedication.setDrugHistoryID(drugHistoryId);
        newMedication.setDrugName(drugName);
        newMedication.setDosage(dosage);
        newMedication.setStartDate(startDate);
        newMedication.setEndDate(endDate);
        medicationRepository.save(newMedication);
        return "Saved Medication";
    }

    @GetMapping(path="/medication")
    public @ResponseBody Iterable<Medication> getAllMedication(){
        //This returns a JSON or XML with the medication
        return medicationRepository.findAll();
    }

    @GetMapping(path="/medication/{id}")
    public @ResponseBody
    Optional<Medication> getPatientById(@PathVariable(value = "id") String drugHistoryId){
        return medicationRepository.findById(drugHistoryId);
    }
}
