package org.cradlePlatform.controller;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Optional;

import org.cradlePlatform.model.Referral;
import org.cradlePlatform.repository.ReferralRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/referrals")
public class ReferralController {
    @Autowired
    private ReferralRepository referralRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addAReferral(@RequestParam int referrerId,
                                             @RequestParam String readingId,
                                             @RequestParam Timestamp timestamp){
        Referral newReferral = new Referral();
        newReferral.setId(referrerId);
        newReferral.setReadingID(readingId);
        newReferral.setTimestamp(timestamp);
        return "Saved Referral";
    }

    @GetMapping(path="/getAll")
    public @ResponseBody Iterable<Referral> getAllReferral() {
        return referralRepository.findAll();
    }

    @GetMapping(path="/getAll/{id}")
    public @ResponseBody
    Optional<Referral> getReferralById(@PathVariable(value = "id") String referrerId){
        return referralRepository.findById(referrerId);
    }
}


