/**
 * HealthWorkerController contains functions to retrieve and add health workers.
 * A health worker can be found by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.HealthWorker;
import org.cradlePlatform.repository.HealthWorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
public class HealthWorkerController {
    @Autowired
    private HealthWorkerRepository healthWorkerRepository;

    // GET mappings

    @GetMapping(path="/api/healthWorkers")
    public Iterable<HealthWorker> getAllHealthWorkers(){
        //This returns a JSON or XML with the users
        return healthWorkerRepository.findAll();
    }

    @GetMapping(path="/api/healthWorkers/{id}")
    public Optional<HealthWorker> getHealthWorkerById(@PathVariable(value = "id") String healthWorkerId){
        return healthWorkerRepository.findById(healthWorkerId);
    }

    // POST mappings

    @PostMapping(path="/api/healthWorkers")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addNewHealthWorker(@RequestBody HealthWorker hw){
        HealthWorker newHealthWorker = new HealthWorker();
        newHealthWorker.setId(hw.getId());
        healthWorkerRepository.save(newHealthWorker);
        return "Saved Health Worker";
    }
}
