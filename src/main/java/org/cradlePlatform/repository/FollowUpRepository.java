package org.cradlePlatform.repository;

import org.cradlePlatform.model.FollowUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowUpRepository extends CrudRepository<FollowUp, String> {

}