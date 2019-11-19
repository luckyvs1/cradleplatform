package org.cradlePlatform.repository;

import org.cradlePlatform.model.Medication;
import org.cradlePlatform.model.Monitor;
import org.cradlePlatform.model.Patient;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.FollowUp;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonitorRepository extends CrudRepository<Monitor, String> {

    @Query("SELECT p FROM Patient p, Monitor m WHERE m.vhtId = :id")
    List<Patient> getPatientsByVhtId(@Param("id") String id);

    @Query("SELECT p " +
            "FROM Patient p INNER JOIN Monitor m " +
            "ON p.id = m.patientId " +
            "WHERE m.vhtId = :vhtId AND m.patientId = :patientId")
    Patient getPatientByVhtIdAndPatientId(@Param("vhtId") String vhtId, @Param("patientId") String patientId);

    @Query( "SELECT r " +
            "FROM Reading r " +
            "WHERE r.patientId = ( " +
                "SELECT p " +
                "FROM  Patient p INNER JOIN Monitor m ON p.id = m.patientId " +
                "WHERE m.vhtId = :vhtId AND m.patientId = :patientId)")
    Iterable<Reading> findReadingByVhtIdAndPatientId(@Param("vhtId") String vhtId, @Param("patientId") String patientId);

    @Query( "SELECT f " +
            "FROM FollowUp f " +
            "WHERE f.patientId = ( " +
                "SELECT p " +
                "FROM  Patient p INNER JOIN Monitor m ON p.id = m.patientId " +
                "WHERE m.vhtId = :vhtId AND m.patientId = :patientId)")
    Iterable<FollowUp> findFollowUpVhtIdAndPatientId(@Param("vhtId") String vhtId, @Param("patientId") String patientId);

    @Query("UPDATE Monitor " +
            "SET VHT_id = :vhtId2 WHERE VHT_id = :vhtId1")
    void transferPatientOfTwoVHTs(@Param("vhtId1") String vhtId1, @Param("vhtId2") String vhtId2);
}

