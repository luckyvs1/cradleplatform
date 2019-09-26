/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.FollowUp;
import org.cradlePlatform.repository.FollowUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/followup")
public class FollowUpController {
    @Autowired
    private FollowUpRepository followUpRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addAFollowUp (@RequestParam int id, @RequestParam String patient_id,
                                             @RequestParam String notes, @RequestParam boolean required,
                                             @RequestParam String frequency, @RequestParam String diagnosis,
                                             @RequestParam String treatment){
        //TODO: add stuff here
        return "Successfully saved";
    }

    @GetMapping(path="/getAll")
    public @ResponseBody Iterable<FollowUp> getAllFollowUp() {
        return followUpRepository.findAll();
    }
}
