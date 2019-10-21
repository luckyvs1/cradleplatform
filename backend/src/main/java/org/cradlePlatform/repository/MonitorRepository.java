package org.cradlePlatform.repository;

import org.cradlePlatform.model.Monitor;
import org.cradlePlatform.model.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonitorRepository extends CrudRepository<Monitor, String> {

    @Query("SELECT p FROM Patient p, Monitor m WHERE  m.vhtId = :id")
    List<Patient> getPatientsByVhtId(@Param("id") String id);

}

