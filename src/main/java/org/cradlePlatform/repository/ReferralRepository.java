package org.cradlePlatform.repository;

import org.cradlePlatform.model.Referral;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface ReferralRepository extends CrudRepository<Referral, Integer> {
}
