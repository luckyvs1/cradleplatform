package org.cradlePlatform.controller;

import org.cradlePlatform.model.MedicalHistory;
import org.cradlePlatform.repository.MedicalHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/medicalhistory")
public class MedicalHistoryController {
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addMedicalHistory (@RequestParam int id,
                                                   @RequestParam String patientId,
                                                   @RequestParam String medHistoryText){
        MedicalHistory newMedicalHistory = new MedicalHistory();
        newMedicalHistory.setPatientID(patientId);
        newMedicalHistory.setMedicalHistoryText(medHistoryText);
        newMedicalHistory.setId(id);
        medicalHistoryRepository.save(newMedicalHistory);
        return "Saved Medical History";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<MedicalHistory> getAllMedicalHistory(){
        //This returns a JSON or XML with the users
        return medicalHistoryRepository.findAll();
    }
}
