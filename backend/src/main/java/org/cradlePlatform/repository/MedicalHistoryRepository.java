package org.cradlePlatform.repository;

import org.cradlePlatform.model.MedicalHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MedicalHistoryRepository extends CrudRepository<MedicalHistory, Integer> {
	Optional<MedicalHistory> findTopByPatientIdOrderByIdDesc(String patientId);
}