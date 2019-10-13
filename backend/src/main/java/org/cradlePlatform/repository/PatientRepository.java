package org.cradlePlatform.repository;

import org.cradlePlatform.model.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient, String> {

    @Query("SELECT p FROM Patient p WHERE p.initials = :initials")
    Patient findByInitials(@Param("initials") String initials);
}