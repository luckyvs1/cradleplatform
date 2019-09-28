/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/readings")
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addAReading(@RequestParam String reader_id, @RequestParam String patient_id,
                                            @RequestParam Timestamp timestamp, @RequestParam ArrayList<String> symptoms,
                                            @RequestParam String other_symptoms,
                                            @RequestParam int systolic_bp, @RequestParam int diastolic_bp,
                                            @RequestParam int pulse_rate, @RequestParam String notes,
                                            @RequestParam boolean need_followup){
        Reading newReading = new Reading();
        newReading.setPatientID(patient_id);
        newReading.setReaderID(reader_id);
        newReading.setTimestamp(timestamp);
        newReading.setOtherSymptoms(other_symptoms);
        newReading.setSystolicBloodPressure(systolic_bp);
        newReading.setDiastolicBloodPressure(diastolic_bp);
        newReading.setNotes(notes);
        newReading.setNeedFollowUp(need_followup);
        readingRepository.save(newReading);

        return "Saved";
    }

    @GetMapping(path="/getAll")
    public @ResponseBody Iterable<Reading> getAllReadings() {
        return readingRepository.findAll();
    }
}

