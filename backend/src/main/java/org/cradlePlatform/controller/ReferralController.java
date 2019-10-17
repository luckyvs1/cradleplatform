/**
 * ReferralController contains functions to retrieve and add referrals.
 * A specific referral can be found by its ID.
 */
package org.cradlePlatform.controller;

import java.util.Optional;
import org.cradlePlatform.model.Referral;
import org.cradlePlatform.repository.ReferralRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class ReferralController {
    @Autowired
    private ReferralRepository referralRepository;

    @PostMapping(path="/api/referrals")
    public @ResponseBody String addAReferral(@RequestBody Referral referral){
        Referral newReferral = new Referral();
        newReferral.setId(referral.getId());
        newReferral.setReferrerId(referral.getReferrerId());
        newReferral.setPatientId(referral.getPatientId());
        newReferral.setTimestamp(referral.getTimestamp());
        newReferral.setHealthFacility(referral.getHealthFacility());
        newReferral.setNotesReason(referral.getNotesReason());
        newReferral.setNotesAction(referral.getNotesAction());

        referralRepository.save(newReferral);

        return "Saved Referral";
    }

    @GetMapping(path="/api/referrals")
    public @ResponseBody Iterable<Referral> getAllReferral() {
        return referralRepository.findAll();
    }

    @GetMapping(path="/api/referrals/{id}")
    public @ResponseBody
    Optional<Referral> getReferralById(@PathVariable(value = "id") String referrerId){
        return referralRepository.findById(referrerId);
    }
}


