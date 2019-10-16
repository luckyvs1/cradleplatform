/**
 * PatientController contains functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.GestationalAgeTimeUnit;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Sex;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = { "http://localhost:3000"})
@Controller
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(path="/api/patients")
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

        patientRepository.save(newPatient);

        return "Saved Patient";
    }

    @GetMapping(path="/api/patients")
    public @ResponseBody Iterable<Patient> getAllPatients(){
        return patientRepository.findAll();
    }

    @GetMapping(path="/api/patients/{id:\\d+}")
    public @ResponseBody Optional<Patient> getPatientById(@PathVariable(value = "id") String patientId){
        return patientRepository.findById(patientId);
    }

    @GetMapping(path="/api/patients/{initials}")
    public @ResponseBody Patient getPatientByInitials(@PathVariable(value = "initials") String initials){
        return patientRepository.findByInitials(initials);
    }
}
