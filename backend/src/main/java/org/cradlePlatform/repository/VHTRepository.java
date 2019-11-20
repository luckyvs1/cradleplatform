package org.cradlePlatform.repository;

import org.cradlePlatform.model.VHT;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface VHTRepository extends CrudRepository<VHT, String> {
   Optional<VHT> findVHTById(String id);
}
