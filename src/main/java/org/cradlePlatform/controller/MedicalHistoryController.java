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
    public @ResponseBody String addMedicalHistory (@RequestParam int id, @RequestParam String patient_id,
                                                   @RequestParam String med_history_text){
        MedicalHistory newMedicalHistory = new MedicalHistory();
        newMedicalHistory.setPatientID(patient_id);
        newMedicalHistory.setMedicalHistoryText(med_history_text);
        newMedicalHistory.setId(id);
        medicalHistoryRepository.save(newMedicalHistory);
        return "Saved Medical History";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<MedicalHistory> getAllMedicalHistory(){
        //This returns a JSON or XML with the users
        return medicalHistoryRepository.findAll();
    }

    @GetMapping(path="/byId")
    public @ResponseBody
    Optional<MedicalHistory> getMedicalHistoryById(String patient_id){
        return medicalHistoryRepository.findById(patient_id);
    }
}
