/**
 * FollowUpController retrieves and adds Admins
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.FollowUp;
import org.cradlePlatform.repository.FollowUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class FollowUpController {
    @Autowired
    private FollowUpRepository followUpRepository;

    @PostMapping(path="/followUp")
    public @ResponseBody String addAFollowUp (@RequestParam String patientId,
                                              @RequestParam String notes,
                                              @RequestParam boolean required,
                                              @RequestParam String frequency,
                                              @RequestParam String diagnosis,
                                              @RequestParam String treatment){
        FollowUp newFollowUp = new FollowUp();
        newFollowUp.setPatientID(patientId);
        newFollowUp.setFollowUpNotes(notes);
        newFollowUp.setRequired(required);
        newFollowUp.setFrequency(frequency);
        newFollowUp.setDiagnosis(diagnosis);
        newFollowUp.setTreatment(treatment);
        return "Saved Follow Up";
    }

    @GetMapping(path="/followUp")
    public @ResponseBody Iterable<FollowUp> getAllFollowUp() {
        return followUpRepository.findAll();
    }
}
