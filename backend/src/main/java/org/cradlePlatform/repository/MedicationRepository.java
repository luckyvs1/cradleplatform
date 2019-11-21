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
	@Query("DELETE FROM Medication m WHERE m.patientId = :patientId AND m.id = :drugId")
	void deleteByPatientIdAndId(@Param("patientId") int patientId, @Param("drugId") int drugId);

	@Modifying
	void deleteByPatientId(int patientId);
}
