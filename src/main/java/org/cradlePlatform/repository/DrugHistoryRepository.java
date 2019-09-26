package org.cradlePlatform.repository;

import org.cradlePlatform.model.DrugHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrugHistoryRepository extends CrudRepository<DrugHistory, String> {

}