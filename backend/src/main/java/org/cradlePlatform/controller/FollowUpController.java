/**
 * FollowUpController retrieves and adds patient follow-up information.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.FollowUp;
import org.cradlePlatform.repository.FollowUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
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
    @GetMapping(path="/api/patients/{id}/follow-ups")
    public Iterable<FollowUp> getFollowUpByPatientId(@PathVariable(value = "id") int id,
                                                     @RequestParam(value = "latest", required = false) boolean latest) {
        if (latest) {
            return followUpRepository.findTopByPatientIdOrderByIdDesc(id);
        } else {
            return followUpRepository.findByPatientIdOrderByIdDesc(id);
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

    @GetMapping(path="/api/vhts/{id}/followUps")
    public Iterable<FollowUp> getFollowUpsByVhtId(@PathVariable(value = "id") String id) {
        return followUpRepository.findFollowUpsByVhtId(id);
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
        followUpRepository.save(followUp);
        return "Saved Follow Up";
    }

    /**
     * Edit an existing FollowUp with matching id in the db.
     * As a sanity check, patientIds must match. (in case request body did not include ID which would give default id 0)
     * @param followUp followUp data to store.
     * @return 200 if success, 404 if no matching id, 400 if request patientId does not match FollowUp from db.
     */
    @PutMapping(path="/api/followUps")
    public @ResponseBody ResponseEntity<String> editFollowUp(@RequestBody FollowUp followUp) {
        int id = followUp.getId();
        Optional<FollowUp> fetchedFollowUpOptional = followUpRepository.findById(id);
        if (fetchedFollowUpOptional.isPresent()) {
            FollowUp fetchedFollowUp = fetchedFollowUpOptional.get();
            if (fetchedFollowUp.getPatientId() == followUp.getPatientId()) {
                fetchedFollowUp.updateFollowUp(followUp);
                followUpRepository.save(fetchedFollowUp);
                String responseMsg = "Edited FollowUp #" + id;
                return new ResponseEntity<String>(responseMsg, HttpStatus.OK);
            } else {
                String responseMsg = "Invalid request.";
                return new ResponseEntity<String>(responseMsg, HttpStatus.BAD_REQUEST);
            }
        }
        String responseMsg = "FollowUp with id " + id + " not found";
        return new ResponseEntity<String>(responseMsg, HttpStatus.NOT_FOUND);
    }
}
