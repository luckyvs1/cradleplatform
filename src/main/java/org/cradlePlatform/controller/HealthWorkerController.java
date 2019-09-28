package org.cradlePlatform.controller;

import org.cradlePlatform.model.HealthWorker;
import org.cradlePlatform.repository.HealthWorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
}
