package org.cradlePlatform.repository;

import org.cradlePlatform.model.ReferralEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferralEntityRepository extends CrudRepository<ReferralEntity, String> {

}
