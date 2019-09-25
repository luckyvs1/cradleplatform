package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
@Table(name = "Referral")
public class Referral {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String referrerID;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "Reader ID Can't Be Empty")
    private String readingID;

    @NotEmpty(message = "Timestamp Can't Be Empty")
    private Timestamp timestamp;

    public Referral(@NotEmpty(message = "Patient ID Can't Be Empty") String referrerID, @NotEmpty(message = "Reader ID Can't Be Empty") String readingID,
                    @NotEmpty(message = "Timestamp Can't Be Empty") Timestamp timestamp) {
        this.referrerID = referrerID;
        this.readingID = readingID;
        this.timestamp = timestamp;
    }

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
