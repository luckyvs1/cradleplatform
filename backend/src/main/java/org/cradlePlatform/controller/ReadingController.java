/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;


import java.util.Optional;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @PostMapping(path="/api/readings")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addAReading(@RequestBody Reading reading){
        Reading newReading = new Reading();
        newReading.setReaderId(reading.getReaderId());
        newReading.setPatientId(reading.getPatientId());
        newReading.setTimestamp(reading.getTimestamp());
        newReading.setSymptoms(reading.getSymptoms());
        newReading.setOtherSymptoms(reading.getOtherSymptoms());
        newReading.setSystolicBloodPressure(reading.getSystolicBloodPressure());
        newReading.setDiastolicBloodPressure(reading.getDiastolicBloodPressure());
        newReading.setPulseRate(reading.getPulseRate());
        newReading.setNotes(reading.getNotes());
        newReading.setNeedFollowUp(reading.getNeedFollowUp());
        newReading.setNeedFollowUp(reading.getNeedFollowUp());
        newReading.setAppVersion(reading.getAppVersion());
        newReading.setDateLastSaved(reading.getDateLastSaved());
        newReading.setRecheckVitalsDate(reading.getRecheckVitalsDate());
        newReading.setDeviceInformation(reading.getDeviceInformation());
        newReading.setGestationalAgeTimeUnit(reading.getGestationalAgeTimeUnit());
        newReading.setGestationalAge(reading.getGestationalAge());
        newReading.setManuallyChangedOcrResults(reading.getManuallyChangedOcrResults());
        newReading.setPhotoPath(reading.getPhotoPath());
        newReading.setTotalOcrSeconds(reading.getTotalOcrSeconds());
        newReading.setRegion(reading.getRegion());
        newReading.setOcrEnabled(reading.getOcrEnabled());
        newReading.setUploadImages(reading.getUploadImages());
        newReading.setVitalsTrafficLight(reading.getVitalsTrafficLight());

        readingRepository.save(newReading);

        return "Saved Reading";
    }

    @GetMapping(path="/api/readings")
    public Iterable<Reading> getAllReadings() {
        return readingRepository.findAll();
    }

    @GetMapping(path="/api/readings/{id}")
    public Optional<Reading> getReadingsById(@PathVariable(value = "id") String readingsId){
        return readingRepository.findById(readingsId);
    }
}

