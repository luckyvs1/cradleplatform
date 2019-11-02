/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;


import java.util.ArrayList;
import java.util.Optional;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @Autowired
    private org.cradlePlatform.service.ReadingService readingService;

    @PostMapping(path="/api/readings")
    public @ResponseBody ResponseEntity<String> addReadings(@RequestBody Reading reading){
        Boolean trafficLightIsValid = readingService.isValidTrafficLight(reading);
        Boolean referralValid = readingService.isValidReferralToHealthCentreRecommended(reading);

        if (trafficLightIsValid && referralValid) {
            readingRepository.save(reading);
            return new ResponseEntity<String>("Saved Reading", HttpStatus.CREATED);
        }

        return new ResponseEntity<String>("Did not create reading", HttpStatus.BAD_REQUEST);
    }

    @PostMapping(path="/api/readings-multi")
    public @ResponseBody ResponseEntity<String> addReadings(@RequestBody ReadingUploadWrapper readings) {
        ArrayList<Reading> invalidReadings = new ArrayList<>();
        for (Reading reading : readings.getReadings()) {

            Boolean trafficLightIsValid = readingService.isValidTrafficLight(reading);
            Boolean referralValid = readingService.isValidReferralToHealthCentreRecommended(reading);

            if (trafficLightIsValid && referralValid) {
                readingRepository.save(reading);
            } else {
                invalidReadings.add(reading);
            }

        }

        if (invalidReadings.isEmpty()) {
            return new ResponseEntity<String>("Saved Readings", HttpStatus.CREATED);
        }

        //TODO: Not all readings were saved due to error - need retry mechanism?
        return new ResponseEntity<String>("Not all readings were saved", HttpStatus.CREATED);
    }

    @GetMapping(path="/api/readings")
    public Iterable<Reading> getAllReadings() {
        return readingRepository.findAll();
    }

    @GetMapping(path="/api/readings/{id}")
    public Optional<Reading> getReadingsById(@PathVariable(value = "id") int readingId){
        return readingRepository.findById(readingId);
    }
}

