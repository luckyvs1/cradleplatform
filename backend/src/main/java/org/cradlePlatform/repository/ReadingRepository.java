package org.cradlePlatform.repository;

import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.ReadingGetWrapper;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadingRepository extends CrudRepository<Reading, Integer> {
    Iterable<Reading> findReadingByPatientId(int patientId);
    Iterable<Reading> findTopByPatientIdOrderByIdDesc(int patientId);

    @Query("SELECT new org.cradlePlatform.model.ReadingGetWrapper(R, P.initials, P.age) " +
            "FROM Reading R " +
            "INNER JOIN Patient P ON R.patientId = P.id")
    Iterable<ReadingGetWrapper> findReadingsWithInitialsAge();
}
