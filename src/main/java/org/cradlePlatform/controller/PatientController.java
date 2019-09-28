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
@RequestMapping(path="patient")
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewPatient (@RequestParam String id, @RequestParam String village_no,
                                               @RequestParam String initials, @RequestParam Sex sex,
                                               @RequestParam int age, @RequestParam boolean pregnant,
                                               @RequestParam GestationalAgeTimeUnit gestation_age_unit, @RequestParam int gestation_age){
        Patient newPatient = new Patient();
        newPatient.setId(id);
        newPatient.setVillage_no(village_no);
        newPatient.setInitials(initials);
        newPatient.setSex(sex);
        newPatient.setAge(age);
        newPatient.setPregnant(pregnant);
        newPatient.setGestationAgeUnit(gestation_age_unit);
        newPatient.setGestationAge(gestation_age);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Patient> getAllPatients(){
        //This returns a JSON or XML with the patients
        return patientRepository.findAll();
    }

    @GetMapping(path="/getAll/{id}")
    public @ResponseBody
    Optional<Patient> getPatientById(@PathVariable(value = "id") String patient_id){
        return patientRepository.findById(patient_id);
    }
}
