/**
 * MedicalHistoryController contains functions to retrieve and add patient's medical history.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.MedicalHistory;
import org.cradlePlatform.repository.MedicalHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class MedicalHistoryController {
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;

    // GET mappings

    /**
     * Get all MedicalHistories or the latest of a patient from the DB by their patientId
     * @param patientId patientId of patient to get MedicalHistory for
     * @return 200: JSON of patient's MedicalHistory(ies)
     */
    @GetMapping(path="/api/patients/{patientId}/medical-notes")
    public Iterable<MedicalHistory> getMedicalHistoryByPatientId(@PathVariable(value = "patientId") int patientId) {
        return medicalHistoryRepository.findByPatientIdOrderByTimestampDesc(patientId);
    }

    @GetMapping(path="/api/medical-notes/{id}")
    public Optional<MedicalHistory> getMedicalHistoryById(@PathVariable(value = "id") int id){
        return medicalHistoryRepository.findById(id);
    }

    // POST mappings

    @PostMapping(path="/api/medical-notes")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addMedicalHistory (@RequestBody MedicalHistory medicalHistory) {
        medicalHistoryRepository.save(medicalHistory);
        return "Saved Medical Note";
    }
}
