package org.cradlePlatform.repository;

import org.cradlePlatform.model.MedicalHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalHistoryRepository extends CrudRepository<MedicalHistory, String> {

}