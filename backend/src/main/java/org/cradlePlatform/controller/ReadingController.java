/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;

import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Optional;

import com.google.gson.*;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.model.ReadingGetWrapper;
import org.cradlePlatform.repository.ReadingRepository;
import org.cradlePlatform.service.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import javax.print.DocFlavor;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @Autowired
    private ReadingService readingService;

    private static String currentSMSReadingBody = "";

    @PostMapping(path="/api/smsreadings")
    public String smsReadings(@RequestParam String Body){
        currentSMSReadingBody += Body;
        currentSMSReadingBody = currentSMSReadingBody.replace("<", "[");
        currentSMSReadingBody = currentSMSReadingBody.replace(">", "]");
        currentSMSReadingBody = currentSMSReadingBody.replace("(", "{");
        currentSMSReadingBody = currentSMSReadingBody.replace(")", "}");
        if(currentSMSReadingBody.endsWith("END0;")) {
            return saveSMSReading();
        } else {
            return "Reading";
        }
    }

    private String saveSMSReading() {
        try {
            currentSMSReadingBody = currentSMSReadingBody.replace("END0;", "");
            Gson g = new Gson();
            Reading p = g.fromJson(currentSMSReadingBody, Reading.class);
            p.setRecheckVitalsDate(new Timestamp(System.currentTimeMillis()));
            readingRepository.save(p);
            currentSMSReadingBody = "";
            return "Success";
        }catch (Exception e) {
            currentSMSReadingBody = "";
            return "Failed";
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

    @PostMapping(path="/api/readings-multi")
    public ResponseEntity<String> addReadings(@RequestBody ReadingUploadWrapper readings) {
        int numInvalidReadings = 0;
        for (Reading reading : readings.getReadings()) {

            Boolean trafficLightIsValid = readingService.isValidTrafficLight(reading);
            Boolean referralValid = readingService.isValidReferralToHealthCentre(reading);

            if (trafficLightIsValid && referralValid) {
                readingRepository.save(reading);
            } else {
                numInvalidReadings++;
            }

        }

        if (numInvalidReadings == readings.getReadings().size()) {
            return new ResponseEntity<String>("No readings were saved", HttpStatus.BAD_REQUEST);
        } else if (numInvalidReadings > 0) {
            //TODO: Not all readings were saved due to error
            return new ResponseEntity<String>("Not all readings were saved", HttpStatus.CREATED);
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

