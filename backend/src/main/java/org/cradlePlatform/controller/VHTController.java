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
import java.util.Optional;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class VHTController {
    @Autowired
    private VHTRepository vhtRepository;

    @Autowired
    private MonitorRepository monitorRepository;

    @PostMapping(path="/api/vhts")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addNewVHT (@RequestBody VHT vht) {
        vhtRepository.save(vht);
        return "Saved VHT";
    }

    @GetMapping(path="/api/vhts/{id}/patients")
    public Iterable<Patient> getPatientsByVhtId(@PathVariable(value = "id") String id) {
        return monitorRepository.getPatientsByVhtId(id);
    }

    @GetMapping(path="/api/vhts/{vhtId}/patients/{patientId}")
    public Patient getPatientByVhtIdAndPatientId(@PathVariable(value = "vhtId") String vhtId,
                                                 @PathVariable(value = "patientId") int patientId) {
        return monitorRepository.getPatientByVhtIdAndPatientId(vhtId, patientId);
    }

    @GetMapping(path="/api/vhts/{vhtId}/patients/{patientId}/readings")
    public Iterable<Reading> getReadingByVhtIdAndPatientId(@PathVariable(value = "vhtId") String vhtId,
                                                           @PathVariable(value = "patientId") int patientId) {
        return monitorRepository.findReadingByVhtIdAndPatientId(vhtId, patientId);
    }

    @GetMapping(path="/api/vhts/{vhtId}/patients/{patientId}/followup")
    public Iterable<FollowUp> getFollowUpByVhtIdAndPatientId(@PathVariable(value = "vhtId") String vhtId,
                                                             @PathVariable(value = "patientId") int patientId) {
        return monitorRepository.findFollowUpVhtIdAndPatientId(vhtId, patientId);
    }

    @GetMapping(path="/api/vhts")
    public Iterable<VHT> getAllVHTs() {
        //This returns a JSON or XML with the users
        return vhtRepository.findAll();
    }
    /*
    Transfer responsibility (patient assignment) from vhtId1 to vhtId2
     */
    @PostMapping(path="/api/vhts/transfer/{vhtId1}&{vhtId2}")
    @ResponseStatus(code = HttpStatus.OK)
    public @ResponseBody ResponseEntity<String> transferPatientOfVHTs(@PathVariable(value="vhtId1") String vhtId1,
                                  @PathVariable(value="vhtId2") String vhtId2){
        Optional<VHT> optionalVHT1 = vhtRepository.findVHTById (vhtId1);
        Optional<VHT> optionalVHT2 = vhtRepository.findVHTById (vhtId2);
        if(optionalVHT1.isPresent() && optionalVHT2.isPresent()){
            monitorRepository.transferPatientOfTwoVHTs(vhtId1, vhtId2);
            return new ResponseEntity<String>("Success", HttpStatus.OK);
        }
        return new ResponseEntity<String>("Failure", HttpStatus.BAD_REQUEST);
    }
}
