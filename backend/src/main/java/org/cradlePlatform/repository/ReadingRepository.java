package org.cradlePlatform.repository;

import org.cradlePlatform.model.Reading;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadingRepository extends CrudRepository<Reading, Integer> {
    Iterable<Reading> findReadingByPatientIdOrderByIdDesc(int patientId);
    Iterable<Reading> findTopByPatientIdOrderByIdDesc(int patientId);
}
