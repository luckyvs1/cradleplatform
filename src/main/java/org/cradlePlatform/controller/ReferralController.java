package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.Optional;

import org.cradlePlatform.model.Referral;
import org.cradlePlatform.model.ReferralEntity;
import org.cradlePlatform.repository.ReferralEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReferralController {
    @Autowired
    private ReferralEntityRepository referralRepository;

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


