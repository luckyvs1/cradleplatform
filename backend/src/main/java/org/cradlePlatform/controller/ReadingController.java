/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import java.util.Set;

import org.cradlePlatform.model.ReadingEntity;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController

public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @PostMapping(path="/api/readings")
    public @ResponseBody String addAReading(@RequestParam String readerId,
                                            @RequestParam String patientId,
                                            @RequestParam Timestamp timestamp,
                                            @RequestParam ArrayList<String> symptoms,
                                            @RequestParam String otherSymptoms,
                                            @RequestParam int systolicBp,
                                            @RequestParam int diastolicBp,
                                            @RequestParam int pulseRate,
                                            @RequestParam String notes,
                                            @RequestParam boolean needFollowup){
        ReadingEntity newReading = new ReadingEntity();
        newReading.setPatientID(patientId);
        newReading.setReaderID(readerId);
        newReading.setTimestamp(timestamp);
        newReading.setOtherSymptoms(otherSymptoms);
        newReading.setSystolicBloodPressure(systolicBp);
        newReading.setDiastolicBloodPressure(diastolicBp);
        newReading.setNotes(notes);
        newReading.setNeedFollowUp(needFollowup);
        readingRepository.save(newReading);

        return "Saved Reading";
    }

    @GetMapping(path="/api/readings")
    public @ResponseBody Iterable<ReadingEntity> getAllReadings() {
        return readingRepository.findAll();
    }

    @GetMapping(path="/api/readings/{id}")
    public @ResponseBody
    Optional<ReadingEntity> getReferralById(@PathVariable(value = "id") String referrerId){
        return readingRepository.findById(referrerId);
    }
}

