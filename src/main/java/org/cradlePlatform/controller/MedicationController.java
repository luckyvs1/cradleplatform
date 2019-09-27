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
    public @ResponseBody String addNewMedication (@RequestParam int drug_history_id, @RequestParam String drug_name,
                                                  @RequestParam String dosage, @RequestParam Date start_date,
                                                  @RequestParam Date end_date){
        Medication newMedication = new Medication(drug_history_id, drug_name, dosage, start_date, end_date);
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

    @GetMapping(path="/byId")
    public @ResponseBody
    Optional<Medication> getMedicationById(String patient_id){
        return medicationRepository.findById(patient_id);
    }
}
