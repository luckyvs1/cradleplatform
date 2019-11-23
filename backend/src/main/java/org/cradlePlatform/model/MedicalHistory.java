/**
 * The MedicalHistory class represents a patient's medical history.
 * A patient's medical history will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "Medical_History")
public class MedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="patient_id")
    private int patientId;

    @NotNull
    private Timestamp timestamp;

    private String history;

    public MedicalHistory() {
    }

    public int getId() {
        return id;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }
}
