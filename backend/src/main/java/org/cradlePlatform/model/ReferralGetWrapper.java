package org.cradlePlatform.model;

import java.sql.Timestamp;

public class ReferralGetWrapper {

  private Referral referral;
  private Patient patient;
  private UserInfo referrer;

  public ReferralGetWrapper() {}

  public ReferralGetWrapper(Referral referral,
                            Patient patient,
                            UserInfo referrer) {
    this.referral = referral;
    this.patient = patient;
    this.referrer = referrer;
  }

  public int getId() {
    return this.referral.getId();
  }

	public UserInfo getReferrer() {
		return this.referrer;
	}

	public Patient getPatient() {
		return this.patient;
	}

	public int getReadingId() {
		return this.referral.getReadingId();
	}

	public Timestamp getTimestamp() {
		return this.referral.getTimestamp();
	}

	public String getHealthFacility() {
		return this.referral.getHealthFacility();
	}

	public String getNotesReason() {
		return this.referral.getNotesReason();
	}

	public String getNotesAction() {
		return this.referral.getNotesAction();
	}

}
