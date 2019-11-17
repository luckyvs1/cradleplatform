package org.cradlePlatform.repository;

import org.cradlePlatform.model.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Integer> {
    Optional<Patient> findUserByAttestationNo(String attestationNo);
}
