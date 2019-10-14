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
public class Referral{

	@Id
	@GeneratedValue
	@NotNull
	private int id;

	@NotBlank
	@Size(max = 32)
	@Column(name = "referrer_id")
	private String referrerId;

	@NotBlank
	@Column(name = "reading_id")
	private String readingId;

	@NotNull
	private Timestamp timestamp;

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

	public String getReadingId() {
		return readingId;
	}

	public void setReadingId(String readingId) {
		this.readingId = readingId;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
}