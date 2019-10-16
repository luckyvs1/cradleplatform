/**
 * DrugHistoryController contains functions to retrieve and adds drug history.
 * A specific patient's drug history can be retrieved by their ID.
 */

package org.cradlePlatform.controller;

import org.cradlePlatform.model.DrugHistory;
import org.cradlePlatform.repository.DrugHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
@CrossOrigin(origins = { "http://localhost:3000"})
@Controller
public class DrugHistoryController {
    @Autowired
    private DrugHistoryRepository drugHistoryRepository;

    // GET mappings

    /**
     * Retrieve all DrugHistories from the DB.
     * @return 200: a JSON of DrugHistory objects or empty JSON if none.
     */
    @GetMapping(path="/api/drugHistories")
    public @ResponseBody Iterable<DrugHistory> getAllDrugHistory() {
        return drugHistoryRepository.findAll();
    }

    /**
     * Retrieve a single DrugHistory from the DB by its corresponding patientID.
     * @param patientID patientId of patient the DrugHistory corresponds to
     * @return 200: Success
     */
    @GetMapping(path="/api/drugHistories/{patientId}")
    public @ResponseBody
    Optional<DrugHistory> getDrugHistoryById(@PathVariable(value = "patientId") String patientID) {
        return drugHistoryRepository.findByPatientId(patientID);
    }

    // POST mappings

	/**
	 * Create a new DrugHistory in the DB.
	 * @param dh DrugHistory formatted data to store
	 * @return 201: Created success
	 */
    @PostMapping(path="/api/drugHistories")
    @ResponseStatus(code = HttpStatus.CREATED)
    public @ResponseBody String addDrugHistory (@RequestBody DrugHistory dh) {
        DrugHistory newDrugHistory = new DrugHistory();
        newDrugHistory.setPatientId(dh.getPatientId());
        newDrugHistory.setHistoryText(dh.getHistoryText());
        drugHistoryRepository.save(newDrugHistory);
        return "Saved Drug History";
    }

}
