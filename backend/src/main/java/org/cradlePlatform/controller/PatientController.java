/**
 * PatientController contains API endpoints and functions to retrieve and add patients to the system.
 * A patient's information can be retrieved by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.repository.PatientRepository;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ReadingRepository readingRepository;

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
    Optional<Patient> getPatientById(@PathVariable(value = "id") int patientId) {
        return patientRepository.findById(patientId);
    }

    @GetMapping(path="/api/patients/{id}/readings")
    public @ResponseBody
    Iterable<Reading> getReadingByPatientId(@PathVariable(value = "id") int patientId,
                                            @RequestParam(value = "latest", required = false) boolean latest){
        if (latest) {
            return  readingRepository.findTopByPatientIdOrderByIdDesc(patientId);
        } else {
            return readingRepository.findReadingByPatientId(patientId);
        }
    }

    // POST mappings

    /**
     * Create a new patient
     * @param patient
     * @return
     */
    @PostMapping(path="/api/patients")
    @ResponseStatus(code = HttpStatus.CREATED)
    public @ResponseBody String addNewPatient (@RequestBody Patient patient){
        Patient newPatient = new Patient();
        newPatient.setAttestationNo(patient.getAttestationNo());
        newPatient.setFirstName(patient.getFirstName());
        newPatient.setLastName(patient.getLastName());
        newPatient.setVillageNo(patient.getVillageNo());
        newPatient.setZoneNo(patient.getZoneNo());
        newPatient.setHouseholdNo(patient.getHouseholdNo());
        newPatient.setBlockNo(patient.getBlockNo());
        newPatient.setTankNo(patient.getTankNo());
        newPatient.setInitials(patient.getInitials());
        newPatient.setSex(patient.getSex());
        newPatient.setAge(patient.getAge());
        newPatient.setDob(patient.getDob());
        newPatient.setPregnant(patient.isPregnant());
        newPatient.setGestationalStartDate(patient.getGestationalStartDate());
        newPatient.setGestationAgeUnit(patient.getGestationAgeUnit());
        newPatient.setCurrentGestationalAge(patient.getCurrentGestationalAge());
        patientRepository.save(newPatient);
        return "Saved Patient";
    }
}
