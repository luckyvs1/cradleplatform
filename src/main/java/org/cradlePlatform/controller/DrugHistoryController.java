package org.cradlePlatform.controller;

import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/drughistory")
public class DrugHistoryController {
    @Autowired
    private DrugHistoryRepository drugHistoryRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addDrugHistory (@RequestParam String patientID, @RequestParam String historyText){
        DrugHistory n = new DrugHistory(patientID, patientID); //should be user id, patient id
        n.setPatientID(patientID);
        n.setHistoryText(historyText);
        drugHistoryRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<DrugHistory> getAllDrugHistory(){
        //this returns a JSON or XML with the drugHistory
        return drugHistoryRepository.findAll();
    }

}
