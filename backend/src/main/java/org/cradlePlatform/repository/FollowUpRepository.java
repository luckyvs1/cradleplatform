package org.cradlePlatform.repository;

import org.cradlePlatform.model.FollowUp;
import org.cradlePlatform.model.Monitor;
import org.cradlePlatform.model.VHT;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FollowUpRepository extends CrudRepository<FollowUp, Integer> {
	Iterable<FollowUp> findByPatientIdOrderByIdDesc(int patientId);
	Iterable<FollowUp> findTopByPatientIdOrderByIdDesc(int patientId);

	@Query("SELECT f " +
			"FROM FollowUp f, Monitor m, VHT v " +
			"WHERE v.id = :vhtId AND v.id = m.vhtId AND m.patientId = f.patientId")
	Iterable<FollowUp> findFollowUpsByVhtId(@Param("vhtId") String vhtId);
}
