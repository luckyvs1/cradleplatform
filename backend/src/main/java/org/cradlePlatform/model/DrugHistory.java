/**
 * The DrugHistory class represents a drug history report for a specific patient.
 * A drug history report will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Drug_History")
public class DrugHistory {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "patient_id")
    private int patientId;

    private Timestamp timestamp;

    private String history;

    public int getId() {
        return id;
    }

    public DrugHistory() {
        this.history = "";
    }

    public int getPatientId() {
        return patientId;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }
}
