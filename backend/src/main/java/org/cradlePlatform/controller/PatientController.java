/**
 * PatientController contains API endpoints and functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.GestationalAgeTimeUnit;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Sex;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    // GET mappings

    /**
     * Get data for all patients
     * @return
     */
    @GetMapping(path="/api/patients")
    public @ResponseBody Iterable<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    /**
     * Get data for patient with matching patient id
     * @param patientId
     * @return
     */
    @GetMapping(path="/api/patients/{id}")
    public @ResponseBody
    Optional<Patient> getPatientById(@PathVariable(value = "id") String patientId) {
        return patientRepository.findById(patientId);
    }

    // POST mappings

    /**
     * Create a new patient
     * @param patient
     * @return
     */
    @PostMapping(path="/api/patients")
    public @ResponseBody String addNewPatient (@RequestBody Patient patient){
        Patient newPatient = new Patient();
        newPatient.setVillageNo(patient.getVillageNo());
        newPatient.setAge(patient.getAge());
        newPatient.setGestationAge(patient.getGestationAge());
        newPatient.setGestationAgeUnit(patient.getGestationAgeUnit());
        newPatient.setInitials(patient.getInitials());
        newPatient.setPregnant(patient.isPregnant());
        newPatient.setVillageNo(patient.getVillageNo());
        newPatient.setSex(patient.getSex());
        patientRepository.save(newPatient);
        return "Saved Patient";

    }
}
