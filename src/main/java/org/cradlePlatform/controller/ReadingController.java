/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.ArrayList;

import org.cradlePlatform.model.ReadingEntity;
import org.cradlePlatform.repository.ReadingEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class ReadingController {
    @Autowired
    private ReadingEntityRepository readingRepository;

    @PostMapping(path="/reading")
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

    @GetMapping(path="/readings")
    public @ResponseBody Iterable<ReadingEntity> getAllReadings() {
        return readingRepository.findAll();
    }
}

