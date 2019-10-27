/**
 * DrugHistoryController contains functions to retrieve and add VHTs.
 */

package org.cradlePlatform.controller;

import org.cradlePlatform.model.FollowUp;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VHT;
import org.cradlePlatform.repository.MonitorRepository;
import org.cradlePlatform.repository.VHTRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8084"})
@RestController
public class VHTController {
    @Autowired
    private VHTRepository vhtRepository;

    @Autowired
    private MonitorRepository monitorRepository;

    @PostMapping(path="/api/vhts")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addNewVHT (@RequestParam String id) {
        VHT newVHT = new VHT();
        newVHT.setId(id);
        vhtRepository.save(newVHT);
        return "Saved VHT";
    }

    @GetMapping(path="/api/vhts/{id}/patients")
    public Iterable<Patient> getPatientsByVhtId(@PathVariable(value = "id") String id) {
        return monitorRepository.getPatientsByVhtId(id);
    }

    @GetMapping(path="/api/vhts/{vhtId}/patients/{patientId}")
    public Patient getPatientByVhtIdAndPatientId(@PathVariable(value = "vhtId") String vhtId,
                                                 @PathVariable(value = "patientId") String patientId) {
        return monitorRepository.getPatientByVhtIdAndPatientId(vhtId, patientId);
    }

    @GetMapping(path="/api/vhts/{vhtId}/patients/{patientId}/readings")
    public Iterable<Reading> getReadingByVhtIdAndPatientId(@PathVariable(value = "vhtId") String vhtId,
                                                           @PathVariable(value = "patientId") String patientId) {
        return monitorRepository.findReadingByVhtIdAndPatientId(vhtId, patientId);
    }

    @GetMapping(path="/api/vhts/{vhtId}/patients/{patientId}/followup")
    public Iterable<FollowUp> getFollowUpByVhtIdAndPatientId(@PathVariable(value = "vhtId") String vhtId,
                                                             @PathVariable(value = "patientId") String patientId) {
        return monitorRepository.findFollowUpVhtIdAndPatientId(vhtId, patientId);
    }

    @GetMapping(path="/api/vhts")
    public Iterable<VHT> getAllVHTs() {
        //This returns a JSON or XML with the users
        return vhtRepository.findAll();
    }
}
