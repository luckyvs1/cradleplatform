/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.Optional;

import com.google.gson.*;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.model.ReadingGetWrapper;
import org.cradlePlatform.repository.ReadingRepository;
import org.cradlePlatform.service.ReadingService;
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

    private static String currentSMSReadingBody = "";

    @PostMapping(path="/api/smsreadings")
    public ResponseEntity<String> smsReadings(@RequestParam String Body){
        currentSMSReadingBody += Body;
        currentSMSReadingBody = currentSMSReadingBody.replace("<", "[");
        currentSMSReadingBody = currentSMSReadingBody.replace(">", "]");
        currentSMSReadingBody = currentSMSReadingBody.replace("(", "{");
        currentSMSReadingBody = currentSMSReadingBody.replace(")", "}");
        if(currentSMSReadingBody.endsWith("END0;")) {
            return saveSMSReading();
        } else {
            return new ResponseEntity<String>("Reading", HttpStatus.ACCEPTED);
        }
    }

    private ResponseEntity<String> saveSMSReading() {
        try {
            currentSMSReadingBody = currentSMSReadingBody.replace("END0;", "");
            Gson g = new Gson();
            Reading p = g.fromJson(currentSMSReadingBody, Reading.class);
            Boolean trafficLightIsValid = readingService.isValidTrafficLight(p);
            p.setRecheckVitalsDate(new Timestamp(System.currentTimeMillis()));
            if(trafficLightIsValid) {
                readingRepository.save(p);
            }
            currentSMSReadingBody = "";
            return new ResponseEntity<String>("Success", HttpStatus.ACCEPTED);
        }catch (Exception e) {
            currentSMSReadingBody = "";
            return new ResponseEntity<String>("Failed", HttpStatus.ACCEPTED);
        }
    }


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
    public ResponseEntity<String> addReadings(@RequestBody ReadingUploadWrapper readings) {
        boolean trafficLightIsValid = true;

        for (Reading reading : readings.getReadings()) {
            trafficLightIsValid &= readingService.isValidTrafficLight(reading);
            if (!trafficLightIsValid) {
                System.out.println(reading.toString());
            }
        }

        if(trafficLightIsValid) {
            for (Reading reading : readings.getReadings()) {
                readingRepository.save(reading);
            }
        }

        if (!trafficLightIsValid) {
            return new ResponseEntity<String>("No readings were saved", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<String>("Saved readings", HttpStatus.CREATED);
        }
    }

    /**
     * Add a Diagnosis text to an existing Reading with matching id in the db.
     * @param id id of Reading to edit
     * @param diagnosis String with diagnosis text to add to reading (not in JSON format)
     * @return 200 if success, 404 if no matching id
     */
    @PutMapping(path="/api/readings/{id}/diagnosis")
    public @ResponseBody ResponseEntity<String> editDiagnosis(@PathVariable(value="id") int id, @RequestBody String diagnosis) {
        Optional<Reading> fetchedReadingOptional = readingRepository.findById(id);
        if (fetchedReadingOptional.isPresent()) {
            Reading fetchedReading = fetchedReadingOptional.get();

            fetchedReading.setDiagnosis(diagnosis);
            readingRepository.save(fetchedReading);
            String responseMsg = "Added diagnosis to Reading #" + id;
            return new ResponseEntity<String>(responseMsg, HttpStatus.OK);
        } else {
            String responseMsg = "Reading with id " + id + " not found";
            return new ResponseEntity<String>(responseMsg, HttpStatus.NOT_FOUND);
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

