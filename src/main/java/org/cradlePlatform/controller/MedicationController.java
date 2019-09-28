package org.cradlePlatform.controller;

import org.cradlePlatform.model.Medication;
import org.cradlePlatform.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@Controller
@RequestMapping(path="/medication")
public class MedicationController {
    @Autowired
    private MedicationRepository medicationRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewMedication (@RequestParam int drug_history_id,
                                                  @RequestParam String drug_name,
                                                  @RequestParam String dosage,
                                                  @RequestParam Date start_date,
                                                  @RequestParam Date end_date){
        Medication newMedication = new Medication();
        newMedication.setDrugHistoryID(drug_history_id);
        newMedication.setDrugName(drug_name);
        newMedication.setDosage(dosage);
        newMedication.setStartDate(start_date);
        newMedication.setEndDate(end_date);
        medicationRepository.save(newMedication);
        return "Saved Medication";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Medication> getAllMedication(){
        //This returns a JSON or XML with the medication
        return medicationRepository.findAll();
    }

    @GetMapping(path="/getAll/{id}")
    public @ResponseBody
    Optional<Medication> getPatientById(@PathVariable(value = "id") String drug_history_id){
        return medicationRepository.findById(drug_history_id);
    }
}
