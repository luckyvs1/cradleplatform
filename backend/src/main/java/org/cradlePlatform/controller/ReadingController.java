/**
 * ReadingController contains functions to retrieve and add a patient's current reading.
 */
/*
    Followed this tutorial: https://spring.io/guides/gs/accessing-data-mysql/
 */
package org.cradlePlatform.controller;


import java.util.Optional;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044"})
@RestController
public class ReadingController {
    @Autowired
    private ReadingRepository readingRepository;

    @PostMapping(path="/api/readings")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addReadings(@RequestBody Reading reading){

        readingRepository.save(reading);

        return "Saved Reading";
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

