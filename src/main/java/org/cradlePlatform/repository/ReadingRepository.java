package org.cradlePlatform.repository;

import org.cradlePlatform.model.Reading;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface ReadingRepository extends CrudRepository<Reading, Integer> {
}