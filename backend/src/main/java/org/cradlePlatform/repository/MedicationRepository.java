package org.cradlePlatform.repository;

import org.cradlePlatform.model.Medication;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationRepository extends CrudRepository<Medication, Integer> {
	Iterable<Medication> findMedicationsByPatientId(int patientId);

	@Modifying
	void deleteByPatientId(int patientId);
}
