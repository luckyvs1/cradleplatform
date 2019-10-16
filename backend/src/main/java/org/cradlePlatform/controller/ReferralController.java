/**
 * ReferralController contains functions to retrieve and add referrals.
 * A specific referral can be found by its ID.
 */
package org.cradlePlatform.controller;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Optional;

import org.cradlePlatform.model.ReferralEntity;
import org.cradlePlatform.repository.ReferralRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class ReferralController {
    @Autowired
    private ReferralRepository referralRepository;

    @PostMapping(path="/referral")
    public @ResponseBody String addAReferral(@RequestParam int referrerId,
                                             @RequestParam String readingId,
                                             @RequestParam Timestamp timestamp){
        ReferralEntity newReferral = new ReferralEntity();
        newReferral.setId(referrerId);
        newReferral.setReadingID(readingId);
        newReferral.setTimestamp(timestamp);
        return "Saved Referral";
    }

    @GetMapping(path="/referral")
    public @ResponseBody Iterable<ReferralEntity> getAllReferral() {
        return referralRepository.findAll();
    }

    @GetMapping(path="/referral/{id}")
    public @ResponseBody
    Optional<ReferralEntity> getReferralById(@PathVariable(value = "id") String referrerId){
        return referralRepository.findById(referrerId);
    }
}


