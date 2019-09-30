/**
 * DrugHistoryController contains functions to retrieve and adds drug history.
 * A specific patient's drug history can be retrieved by their ID.
 */

package org.cradlePlatform.controller;

import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
public class DrugHistoryController {
    @Autowired
    private DrugHistoryRepository drugHistoryRepository;

    @PostMapping(path="/drugHistory")
    public @ResponseBody String addDrugHistory (@RequestParam String id,
                                                @RequestParam String patientID,
                                                @RequestParam String historyText){
        DrugHistory newDrugHistory = new DrugHistory(); //should be user id, patient id?
        newDrugHistory.setPatientId(patientID);
        newDrugHistory.setHistoryText(historyText);
        drugHistoryRepository.save(newDrugHistory);
        return "Saved Drug History";
    }

    @GetMapping(path="/drugHistory")
    public @ResponseBody Iterable<DrugHistory> getAllDrugHistory(){
        //this returns a JSON or XML with the drugHistory
        return drugHistoryRepository.findAll();
    }

    @GetMapping(path="/drugHistory/{id}")
    public @ResponseBody
    Optional<DrugHistory> getDrugHistoryById(@PathVariable(value = "id") String patientID){
        return drugHistoryRepository.findById(patientID);
    }

}
