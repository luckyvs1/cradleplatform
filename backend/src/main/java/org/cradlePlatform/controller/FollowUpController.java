/**
 * FollowUpController retrieves and adds patient follow-up information.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.FollowUp;
import org.cradlePlatform.repository.FollowUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class FollowUpController {
    @Autowired
    private FollowUpRepository followUpRepository;

    // GET mappings

    /**
     * Retrieve all FollowUps from the DB.
     * @return 200: a JSON of FollowUps or empty JSON if none.
     */
    @GetMapping(path="/api/followUps")
    public @ResponseBody Iterable<FollowUp> getAllFollowUps() {
        return followUpRepository.findAll();
    }

    /**
     * Retrieve FollowUps for a particular patient from the DB by patientId.
     * @return 200: JSON of followups
     */
    @GetMapping(path="/api/followUps/{patientId}")
    public @ResponseBody
    Iterable<FollowUp> getFollowUpByPatientId(@PathVariable(value = "patientId") String patientId) {
        return followUpRepository.findByPatientId(patientId);
    }

    /**
     * Retrieve the last FollowUp for a particular patient from the DB by patientId.
     * @return 200: a FollowUp or null if none
     */
    @GetMapping(path="/api/followUps/latest/{patientId}")
    public @ResponseBody
    Optional<FollowUp> getLastFollowUpByPatientId(@PathVariable(value = "patientId") String patientId) {
        return followUpRepository.findTopByPatientIdOrderByIdDesc(patientId);
    }

    // POST mappings

    /**
     * Create a new FollowUp in the db.
     * @param followUp followUp data to store.
     * @return 201 created successfully.
     */
    @PostMapping(path="/api/followUps")
    @ResponseStatus(code = HttpStatus.CREATED)
    public @ResponseBody String addFollowUp(@RequestBody FollowUp followUp) {
        FollowUp newFollowUp = new FollowUp();
        newFollowUp.setPatientId(followUp.getPatientId());
        newFollowUp.setFollowUpNotes(followUp.getFollowUpNotes());
        newFollowUp.setRequired(followUp.getRequired());
        newFollowUp.setFrequency(followUp.getFrequency());
        newFollowUp.setDiagnosis(followUp.getDiagnosis());
        newFollowUp.setTreatment(followUp.getTreatment());
        followUpRepository.save(newFollowUp);
        return "Saved FollowUp";
    }
}
