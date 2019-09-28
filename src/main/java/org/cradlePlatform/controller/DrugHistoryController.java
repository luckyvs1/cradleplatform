package org.cradlePlatform.controller;

import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/drughistory")
public class DrugHistoryController {
    @Autowired
    private DrugHistoryRepository drugHistoryRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addDrugHistory (@RequestParam String id,
                                                @RequestParam String patientID,
                                                @RequestParam String historyText){
        DrugHistory newDrugHistory = new DrugHistory(); //should be user id, patient id?
        newDrugHistory.setPatientId(patientID);
        newDrugHistory.setHistoryText(historyText);
        drugHistoryRepository.save(newDrugHistory);
        return "Saved";
    }

    @GetMapping(path="/get")
    public @ResponseBody Iterable<DrugHistory> getAllDrugHistory(){
        //this returns a JSON or XML with the drugHistory
        return drugHistoryRepository.findAll();
    }
    @GetMapping(path="/test")
    public @ResponseBody String getTest(){
        return "Hello World!";
    }

    @GetMapping(path="/get/{id}")
    public @ResponseBody
    Optional<DrugHistory> getDrugHistoryById(@PathVariable(value = "id") String patientID){
        return drugHistoryRepository.findById(patientID);
    }

}
