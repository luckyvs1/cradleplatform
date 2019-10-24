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
     * Retrieve FollowUps for a particular patient from the DB by patientId.
     * if latest=true, returns only the latest record, otherwise returns all
     * /api/patients/followUps?patientId=123&latest=true
     * @return 200: JSON of followups
     */
    @GetMapping(path="/api/patients/followUps")
    public Iterable<FollowUp> getFollowUpByPatientId(@RequestParam int patientId,
                                              @RequestParam(value = "latest", required = false) boolean latest) {
        if (latest) {
            return followUpRepository.findTopByPatientIdOrderByIdDesc(patientId);
        } else {
            return followUpRepository.findByPatientId(patientId);
        }
    }

    @GetMapping(path="/api/followUps/{id}")
    public Optional<FollowUp> getFollowUpById(@PathVariable(value = "id") int id) {
        return followUpRepository.findById(id);
    }

    @GetMapping(path="/api/followUps")
    public Iterable<FollowUp> getAllFollowUps() {
        return followUpRepository.findAll();
    }

    // POST mappings

    /**
     * Create a new FollowUp in the db.
     * @param followUp followUp data to store.
     * @return 201 created successfully.
     */
    @PostMapping(path="/api/followUps")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addFollowUp(@RequestBody FollowUp followUp) {
        FollowUp newFollowUp = new FollowUp();
        newFollowUp.setPatientId(followUp.getPatientId());
        newFollowUp.setFollowUpNotes(followUp.getFollowUpNotes());
        newFollowUp.setRequired(followUp.getRequired());
        newFollowUp.setFrequency(followUp.getFrequency());
        newFollowUp.setDiagnosis(followUp.getDiagnosis());
        newFollowUp.setTreatment(followUp.getTreatment());
        followUpRepository.save(newFollowUp);
        return "Saved Follow Up";
    }
}
