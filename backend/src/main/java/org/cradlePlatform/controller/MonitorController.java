package org.cradlePlatform.controller;

import org.cradlePlatform.model.Monitor;
import org.cradlePlatform.model.MonitorId;
import org.cradlePlatform.repository.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class MonitorController {
    @Autowired
    private MonitorRepository monitorRepository;

    @PostMapping(path="/api/monitors")
    public String addMonitor (@RequestBody Monitor monitor) {
        Monitor newMonitor = new Monitor(monitor.getVhtId(), monitor.getPatientId());

        monitorRepository.save(newMonitor);
        return "Saved Monitor";
    }

    @GetMapping(path="/api/monitors")
    public Iterable<Monitor> getAllMonitors() {
        //This returns a JSON or XML with the users
        return monitorRepository.findAll();
    }
}
