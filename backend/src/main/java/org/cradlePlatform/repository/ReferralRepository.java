package org.cradlePlatform.repository;

import org.cradlePlatform.model.Referral;
import org.cradlePlatform.model.ReferralGetWrapper;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferralRepository extends CrudRepository<Referral, Integer> {
  Iterable<Referral> findByHealthFacility(String healthFacility);
  Iterable<Referral> findByReferrerId(String referrerId);
  @Query("SELECT new org.cradlePlatform.model.ReferralGetWrapper(R, P, UI) FROM Referral R"
    + " JOIN Patient P ON R.patientId=P.id"
    + " JOIN UserInfo UI ON R.referrerId=UI.id")
  Iterable<ReferralGetWrapper> findReferralsWithPatientAndReferrerUserInfo();
}
