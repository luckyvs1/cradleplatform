package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Drug_History")
public class DrugHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String patientID;

    private String historyText;

    public DrugHistory(String historyText, @NotEmpty(message = "Patient ID Can't Be Empty") String patientID) {
        this.historyText = historyText;
        this.patientID = patientID;
    }

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

    public String getPatientID() {
        return patientID;
    }

    public void setPatientID(String patientID) {
        this.patientID = patientID;
    }
}
