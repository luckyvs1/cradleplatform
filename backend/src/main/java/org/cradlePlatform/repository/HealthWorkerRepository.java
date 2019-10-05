package org.cradlePlatform.repository;

import org.cradlePlatform.model.HealthWorker;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthWorkerRepository extends CrudRepository<HealthWorker, String> {
}
