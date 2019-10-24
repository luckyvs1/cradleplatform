package org.cradlePlatform.repository;

import org.cradlePlatform.model.Referral;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferralRepository extends CrudRepository<Referral, Integer> {
	Iterable<Referral> findByHealthFacility(String healthFacility);
	Iterable<Referral> findByReferrerId(String referrerId);
}
