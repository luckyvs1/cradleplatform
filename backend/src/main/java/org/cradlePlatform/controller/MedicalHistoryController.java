/**
 * MedicalHistoryController contains functions to retrieve and add patient's medical history.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.MedicalHistory;
import org.cradlePlatform.repository.MedicalHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
public class MedicalHistoryController {
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;

    // GET mappings

    @GetMapping(path="/api/medicalHistories")
    public @ResponseBody Iterable<MedicalHistory> getAllMedicalHistories() {
        return medicalHistoryRepository.findAll();
    }

    /**
     * Get the latest MedicalHistory of a patient from the DB by their patientId
     * @param patientId patientId of patient to get MedicalHistory for
     * @return 200: patient's last MedicalHistory or null if none
     */
    @GetMapping(path="/api/medicalHistories/{patientId}")
    public @ResponseBody
    Optional<MedicalHistory> getLastMedicalHistoryByPatientId(@PathVariable(value = "patientId") String patientId) {
        return medicalHistoryRepository.findTopByPatientIdOrderByIdDesc(patientId);
    }

    // POST mappings

    @PostMapping(path="/api/medicalHistories")
    @ResponseStatus(code = HttpStatus.CREATED)
    public @ResponseBody String addMedicalHistory (@RequestBody MedicalHistory mh) {
        MedicalHistory newMedicalHistory = new MedicalHistory();
        newMedicalHistory.setPatientId(mh.getPatientId());
        newMedicalHistory.setMedicalHistoryText(mh.getMedicalHistoryText());
        medicalHistoryRepository.save(newMedicalHistory);
        return "Saved Medical History";
    }
}
