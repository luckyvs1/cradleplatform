/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.Date;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/readings")
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addAReading(@RequestParam String reader_id, @RequestParam String patient_id,
                                            @RequestParam Timestamp timestamp, @RequestParam String other_symptoms,
                                            @RequestParam int systolic_bp, @RequestParam int diastolic_bp,
                                            @RequestParam int pulse_rate, @RequestParam String notes,
                                            @RequestParam boolean need_followup){
        //TODO: not sure about arguments for symptoms
        //TODO: add stuff here

        return "Successfully saved";
    }
    @GetMapping(path="/getAll")
    public @ResponseBody Iterable<Reading> getAllReadings() {
        return readingRepository.findAll();
    }
}
