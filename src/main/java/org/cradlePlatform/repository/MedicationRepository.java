package org.cradlePlatform.repository;

import org.cradlePlatform.model.Medication;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationRepository extends CrudRepository<Medication, String> {

}