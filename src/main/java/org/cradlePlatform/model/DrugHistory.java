/**
 * The DrugHistory class represents a drug history report for a specific patient.
 * A drug history report will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Drug_History")
public class DrugHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @Column(name="patient_id", nullable=false, unique=false)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String patientId;

    private String historyText;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHistoryText() {
        return historyText;
    }

    public void setHistoryText(String historyText) {
        this.historyText = historyText;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }
}
