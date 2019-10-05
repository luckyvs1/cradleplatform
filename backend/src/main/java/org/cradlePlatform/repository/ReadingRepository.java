package org.cradlePlatform.repository;

import org.cradlePlatform.model.ReadingEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadingRepository extends CrudRepository<ReadingEntity, String> {
}
