package org.cradlePlatform.repository;

import org.cradlePlatform.model.Medication;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationRepository extends CrudRepository<Medication, Integer> {
	@Query("SELECT m FROM Medication m, DrugHistory d WHERE  d.patientId = :patientId")
	Iterable<Medication> findMedicationsByPatientId(@Param("patientId") int patientId);

	@Query("DELETE FROM Medication m WHERE m.patientId = :patientId AND m.id = :drugId")
	void deleteByPatientIdAndId(@Param("patientId") int patientId, @Param("drugId") int drugId);

	void deleteByPatientId(int patientId);
}
