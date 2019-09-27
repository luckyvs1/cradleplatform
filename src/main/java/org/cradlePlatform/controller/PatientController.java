package org.cradlePlatform.controller;

import org.cradlePlatform.model.Patient;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="patient")
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewPatient (@RequestParam String id, @RequestParam String village_no,
                                               @RequestParam String initials, @RequestParam String sex,
                                               @RequestParam int age, @RequestParam boolean pregnant,
                                               @RequestParam String gestation_age_unit, @RequestParam int gestation_age){
        Patient newPatient = new Patient(id, village_no, initials, sex, age, pregnant, gestation_age_unit, gestation_age);
        //No set params for patient in model
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Patient> getAllPatients(){
        //This returns a JSON or XML with the patients
        return patientRepository.findAll();
    }
}
