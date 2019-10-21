/**
 * The Referral class represents a patient referral. A patient referral
 * will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
@Table(name = "Referral", schema = "schemas")
public class Referral {

	@Id
	@GeneratedValue
	@NotNull
	private int id;

	@NotBlank
	@Size(max = 32)
	@Column(name = "referrer_id")
	private String referrerId;

	@NotBlank
	@Size(max = 32)
	@Column(name = "patient_id")
	private String patientId;

	@Column(name = "reading_id")
	private int readingId;

	@NotNull
	private Timestamp timestamp;

	@NotBlank
	@Size(max = 32)
	@Column(name = "health_facility")
	private String healthFacility;

	private String notesReason;

	private String notesAction;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReferrerId() {
		return referrerId;
	}

	public void setReferrerId(String referrerId) {
		this.referrerId = referrerId;
	}

	public String getPatientId() {
		return patientId;
	}

	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	public int getReadingId() {
		return readingId;
	}

	public void setReadingId(int readingId) {
		this.readingId = readingId;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

	public String getHealthFacility() {
		return healthFacility;
	}

	public void setHealthFacility(String healthFacility) {
		this.healthFacility = healthFacility;
	}

	public String getNotesReason() {
		return notesReason;
	}

	public void setNotesReason(String notesReason) {
		this.notesReason = notesReason;
	}

	public String getNotesAction() {
		return notesAction;
	}

	public void setNotesAction(String notesAction) {
		this.notesAction = notesAction;
	}
}


