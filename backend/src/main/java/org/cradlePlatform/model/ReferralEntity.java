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
@Table(name = "Referral")
public class ReferralEntity {

    @Id
    @GeneratedValue
    @NotNull
    private int id;

    @NotBlank
    @Size(max = 32)
    private String referrerID;

    @NotBlank
    private String readingID;

    @NotNull
    private Timestamp timestamp;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReferrerID() {
        return referrerID;
    }

    public void setReferrerID(String referrerID) {
        this.referrerID = referrerID;
    }

    public String getReadingID() {
        return readingID;
    }

    public void setReadingID(String readingID) {
        this.readingID = readingID;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}