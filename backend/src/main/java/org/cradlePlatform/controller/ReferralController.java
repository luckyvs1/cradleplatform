/**
 * ReferralController contains functions to retrieve and add referrals.
 * A specific referral can be found by its ID.
 */
package org.cradlePlatform.controller;

import java.util.Optional;
import org.cradlePlatform.model.Referral;
import org.cradlePlatform.model.ReferralGetWrapper;
import org.cradlePlatform.repository.ReferralRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class ReferralController {
    @Autowired
    private ReferralRepository referralRepository;

    @PostMapping(path="/api/referrals")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addAReferral(@RequestBody Referral referral){
        referralRepository.save(referral);
        return "Saved Referral";
    }

    @GetMapping(path="/api/referrals")
    public Iterable<Referral> getAllReferral(@RequestParam(value = "referrerId", required = false) String referrerId) {
        if (referrerId != null) {
            return referralRepository.findByReferrerId(referrerId);
        }
        return referralRepository.findAll();
    }

    @GetMapping(path="/api/referrals/{id}")
    public Optional<Referral> getReferralById(@PathVariable(value = "id") int referralId){
        return referralRepository.findById(referralId);
    }

    @GetMapping(path="/api/health-centre/{health-centre}/referrals")
    public Iterable<Referral> getReferralsByHealthCentre(@PathVariable(value = "health-centre") String healthCentre) {
        return referralRepository.findByHealthFacility(healthCentre);
    }

    @GetMapping(path="/api/referralsWithUserInfo")
    public Iterable<ReferralGetWrapper> getAllReferralsWithPatientAndReferrerUserInfo() {
        return referralRepository.findReferralsWithPatientAndReferrerUserInfo();
    }
}


