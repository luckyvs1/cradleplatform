/**
 * DrugHistoryController contains functions to retrieve and adds drug history.
 * A specific patient's drug history can be retrieved by their ID.
 */

package org.cradlePlatform.controller;

import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044"})
@RestController
public class DrugHistoryController {
    @Autowired
    private DrugHistoryRepository drugHistoryRepository;

    // GET mappings

    /**
     * Retrieve all DrugHistories from the DB for a corresponding patientID.
     * e.g. /api/drugHistories?patientId=123
     * @param patientId patientId to get DrugHistories for
     * @return 200: Success
     */
    @GetMapping(path="/api/drugHistories")
    public Iterable<DrugHistory> getDrugHistoriesByPatientId(@RequestParam int patientId) {
        return drugHistoryRepository.findByPatientId(patientId);
    }

    // POST mappings

	/**
	 * Create a new DrugHistory in the DB.
	 * @param dh DrugHistory formatted data to store
	 * @return 201: Created success
	 */
    @PostMapping(path="/api/drugHistories")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addDrugHistory (@RequestBody DrugHistory dh) {
        DrugHistory newDrugHistory = new DrugHistory();
        newDrugHistory.setPatientId(dh.getPatientId());
        newDrugHistory.setHistoryText(dh.getHistoryText());
        drugHistoryRepository.save(newDrugHistory);
        return "Saved Drug History";
    }

}
