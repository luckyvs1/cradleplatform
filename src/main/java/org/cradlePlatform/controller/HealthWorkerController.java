package org.cradlePlatform.controller;

import org.cradlePlatform.model.HealthWorker;
import org.cradlePlatform.repository.HealthWorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/healthworker")
public class HealthWorkerController {
    @Autowired
    private HealthWorkerRepository healthWorkerRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewHealthWorker(@RequestParam String id){
        HealthWorker newHealthWorker = new HealthWorker();
        newHealthWorker.setId(id);
        healthWorkerRepository.save(newHealthWorker);
        return "Saved Health Worker";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<HealthWorker> getAllHealthWorkers(){
        //This returns a JSON or XML with the users
        return healthWorkerRepository.findAll();
    }
    @GetMapping(path="/getAll/{id}")
    public @ResponseBody
    Optional<HealthWorker> getPatientById(@PathVariable(value = "id") String health_worker_id){
        return healthWorkerRepository.findById(health_worker_id);
    }
}
