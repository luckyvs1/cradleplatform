/**
 * PatientController contains functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Patient;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    // POST mappings

    /**
     * Create a new patient
     * @param patient
     * @return
     */
    @PostMapping(path="/api/patients")
    public String addNewPatient (@RequestBody Patient patient){
        Patient newPatient = new Patient();
        newPatient.setAttestationNo(patient.getAttestationNo());
        newPatient.setFirstName(patient.getFirstName());
        newPatient.setLastName(patient.getLastName());
        newPatient.setVillageNo(patient.getVillageNo());
        newPatient.setZoneNo(patient.getZoneNo());
        newPatient.setHouseholdNo(patient.getHouseholdNo());
        newPatient.setInitials(patient.getInitials());
        newPatient.setSex(patient.getSex());
        newPatient.setAge(patient.getAge());
        newPatient.setDob(patient.getDob());
        newPatient.setPregnant(patient.isPregnant());
        newPatient.setGestationalStartDate(patient.getGestationalStartDate());
        newPatient.setCurrentGestationalAge(patient.getCurrentGestationalAge());
        patientRepository.save(newPatient);
        return "Saved Patient";
    }

    // GET mappings

    /**
     * Get data for all patients
     * @return
     */
    @GetMapping(path="/api/patients")
    public Iterable<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    /**
     * Get data for patient with matching patient id
     * @param patientId
     * @return
     */
    @GetMapping(path="/api/patients/{id}")
    public Optional<Patient> getPatientById(@PathVariable(value = "id") String patientId) {
        return patientRepository.findById(patientId);
    }
}

