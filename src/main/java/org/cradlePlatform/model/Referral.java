package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
@Table(name = "Referral")
public class Referral {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @Column(name="referrer_id", length=32, nullable=false)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String referrerID;

    @Column(name="reading_id", nullable=false)
    @NotEmpty(message = "Reader ID Can't Be Empty")
    private String readingID;

    @Column(name="timestamp", nullable=false)
    @NotEmpty(message = "Timestamp Can't Be Empty")
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
