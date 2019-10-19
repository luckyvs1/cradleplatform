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
@CrossOrigin(origins = { "http://localhost:3000"})
@Controller
public class MedicalHistoryController {
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;

    // GET mappings

    /**
     * Get all MedicalHistories or the latest of a patient from the DB by their patientId
     * @param patientId patientId of patient to get MedicalHistory for
     * @return 200: JSON of patient's MedicalHistory(ies)
     */
    @GetMapping(path="/api/medicalHistories")
    public @ResponseBody
    Iterable<MedicalHistory> getMedicalHistoryByPatientId(@RequestParam String patientId,
                                                          @RequestParam(value = "latest", required = false) boolean latest) {
        if (latest) {
            return medicalHistoryRepository.findTopByPatientIdOrderByIdDesc(patientId);
        } else {
            return medicalHistoryRepository.findAllByPatientId(patientId);
        }

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
