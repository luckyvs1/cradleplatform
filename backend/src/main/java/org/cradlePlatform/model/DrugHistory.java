/**
 * The DrugHistory class represents a drug history report for a specific patient.
 * A drug history report will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Drug_History")
public class DrugHistory {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false, unique=true)
    private int id;

    @Column(name="patient_id", nullable=false, unique=false)
    @Positive(message = "Patient ID Can't Be Empty or Zero")
    private int patientId;

    @Column(name="history")
    private String historyText;

    public DrugHistory() {
        this.patientId = -1;
        this.historyText = "";
    }

    public int getId() {
        return id;
    }

    public String getHistoryText() {
        return historyText;
    }

    public void setHistoryText(String historyText) {
        this.historyText = historyText;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }
}
