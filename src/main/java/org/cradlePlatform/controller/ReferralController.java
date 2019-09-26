package org.cradlePlatform.controller;

import java.util.Date;
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
    public @ResponseBody String addAReferral(@RequestParam String referrer_id,
                                            @RequestParam int reading_id){
        //TODO: add stuff here + current timestamp?

        return "Successfully saved";
    }
    @GetMapping(path="/getAll")
    public @ResponseBody Iterable<Referral> getAllReferral() {
        return referralRepository.findAll();
    }
}
