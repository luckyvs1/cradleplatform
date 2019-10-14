package org.cradlePlatform.repository;

import org.cradlePlatform.model.DrugHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DrugHistoryRepository extends CrudRepository<DrugHistory, Integer> {
	Iterable<DrugHistory> findByPatientId(String patientId);
}