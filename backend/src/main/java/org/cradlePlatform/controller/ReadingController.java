/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.util.Optional;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.model.ReadingGetWrapper;
import org.cradlePlatform.repository.ReadingRepository;
import org.cradlePlatform.service.ReadingService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @Autowired
    private ReadingService readingService;

    @PostMapping(path="/api/readings")
    public ResponseEntity<String> addReading(@RequestBody Reading reading){
        Boolean trafficLightIsValid = readingService.isValidTrafficLight(reading);
        Boolean referralValid = readingService.isValidReferralToHealthCentre(reading);

        if (trafficLightIsValid && referralValid) {
            readingRepository.save(reading);
            return new ResponseEntity<String>("Saved reading", HttpStatus.CREATED);
        }

        return new ResponseEntity<String>("Did not create reading", HttpStatus.BAD_REQUEST);
    }

    @PostMapping(path="/api/readings-process")
    public ResponseEntity<String> validateReading(@RequestBody Reading reading){

        if(readingService.isValidReadingValues(reading)) {
            VitalsTrafficLight vitalsTrafficLight = readingService.getVitalsTrafficLight(reading);
            Boolean needsFollowUp = readingService.isReferralToHealthCentreRecommended(vitalsTrafficLight);
            return new ResponseEntity<String>(readingService.getValidationResponse(vitalsTrafficLight, needsFollowUp), HttpStatus.OK);
        }

        return new ResponseEntity<String>("Invalid reading", HttpStatus.BAD_REQUEST);
    }

    @GetMapping(path="/api/readings-advice/{vitalsTrafficLight}")
    public ResponseEntity<String> getReadingAdvice(@PathVariable(value = "vitalsTrafficLight") VitalsTrafficLight vitalsTrafficLight){
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String jsonString = objectMapper.writeValueAsString(vitalsTrafficLight);
            return new ResponseEntity<String>(jsonString, HttpStatus.OK);
        }  catch (JsonProcessingException error) {
            return new ResponseEntity<String>("Error occurred during JSON parsing", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(path="/api/readings-multi")
    public ResponseEntity<?> addReadings(@RequestBody ReadingUploadWrapper readings) {
        ArrayList<Reading> invalidReadings = new ArrayList<>();
        for (Reading reading : readings.getReadings()) {

            Boolean trafficLightIsValid = readingService.isValidTrafficLight(reading);
            Boolean referralValid = readingService.isValidReferralToHealthCentre(reading);

            if (trafficLightIsValid && referralValid) {
                readingRepository.save(reading);
            } else {
                invalidReadings.add(reading);
            }

        }

        if (invalidReadings.size() == readings.getReadings().size()) {
            return new ResponseEntity<String>("No readings were saved", HttpStatus.BAD_REQUEST);
        } else if (!invalidReadings.isEmpty()) {
            //TODO: Not all readings were saved due to error
            return new ResponseEntity<ArrayList<Reading>>(invalidReadings, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<String>("Saved readings", HttpStatus.CREATED);
        }
    }

    @GetMapping(path="/api/readings")
    public Iterable<Reading> getAllReadings() {
        return readingRepository.findAll();
    }

    @GetMapping(path="/api/readings/{id}")
    public Optional<Reading> getReadingsById(@PathVariable(value = "id") int readingId) {
        return readingRepository.findById(readingId);
    }

    @GetMapping(path="/api/patientInfoReadings")
    public Iterable<ReadingGetWrapper> getReadingsWIthInitialsAge() {
        return readingRepository.findReadingsWithInitialsAge();
    }
}

