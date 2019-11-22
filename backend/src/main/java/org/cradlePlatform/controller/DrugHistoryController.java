/**
 * DrugHistoryController contains functions to retrieve and adds drug history.
 * A specific patient's drug history can be retrieved by their ID.
 */

package org.cradlePlatform.controller;

import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class DrugHistoryController {
    @Autowired
    private DrugHistoryRepository drugHistoryRepository;

    // GET mappings

    /**
     * Retrieve DrugHistory from the DB for a corresponding patientID.
     * e.g. /api/drugHistories?patientId=123
     * @param patientId patientId to get DrugHistories for
     * @return 200: Success
     */
    @GetMapping(path="/api/patients/{patientId}/drug-notes")
    public Iterable<DrugHistory> getDrugHistoriesByPatientId(@PathVariable(value = "patientId") int patientId) {
        return drugHistoryRepository.findByPatientIdOrderByTimestampDesc(patientId);
    }

    @GetMapping(path="/api/drug-notes/{id}")
    public Optional<DrugHistory> getDrugHistoryById(@PathVariable(value = "id") int id){
        return drugHistoryRepository.findById(id);
    }

    // POST mappings

	/**
	 * Create a new DrugHistory in the DB.
	 * @param dh DrugHistory formatted data to store
	 * @return 201: Created success
	 */
    @PostMapping(path="/api/drug-notes")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addDrugHistory (@RequestBody DrugHistory dh) {
        drugHistoryRepository.save(dh);
        return "Saved Drug History";
    }

    // DELETE mapping

    /**
     * Delete an existing DrugNote with matching id.
     * @param id
     * @return 200 if success, 404 if no matching id
     */
    @DeleteMapping(path="/api/drug-notes/{id}")
    public @ResponseBody
    ResponseEntity<String> deleteFollowUp(@PathVariable(value = "id") int id) {
        if (drugHistoryRepository.existsById(id)) {
            drugHistoryRepository.deleteById(id);
            String responseMsg = "Deleted Drug Note ID #" + id;
            return new ResponseEntity<String>(responseMsg, HttpStatus.OK);
        } else {
            String responseMsg = "Drug Note with ID " + id + " not found.";
            return new ResponseEntity<String>(responseMsg, HttpStatus.NOT_FOUND);
        }
    }

}
