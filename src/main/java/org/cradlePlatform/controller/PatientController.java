package org.cradlePlatform.controller;

import org.cradlePlatform.model.GestationalAgeTimeUnit;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Sex;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(path="/patient")
    public @ResponseBody String addNewPatient (@RequestParam String id,
                                               @RequestParam String villageNo,
                                               @RequestParam String initials,
                                               @RequestParam Sex sex,
                                               @RequestParam int age,
                                               @RequestParam boolean pregnant,
                                               @RequestParam GestationalAgeTimeUnit gestationAgeUnit,
                                               @RequestParam int gestation_age){
        Patient newPatient = new Patient();
        newPatient.setId(id);
        newPatient.setVillageNo(villageNo);
        newPatient.setInitials(initials);
        newPatient.setSex(sex);
        newPatient.setAge(age);
        newPatient.setPregnant(pregnant);
        newPatient.setGestationAgeUnit(gestationAgeUnit);
        newPatient.setGestationAge(gestation_age);
        return "Saved Patient";
    }

    @GetMapping(path="/patients")
    public @ResponseBody Iterable<Patient> getAllPatients(){
        //This returns a JSON or XML with the patients
        return patientRepository.findAll();
    }

    @GetMapping(path="/patient/{id}")
    public @ResponseBody
    Optional<Patient> getPatientById(@PathVariable(value = "id") String patientId){
        return patientRepository.findById(patientId);
    }
}
