package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Medical History")
public class MedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String patientID;

    private String MedicalHistoryText;

    public MedicalHistory(@NotEmpty(message = "Patient ID Can't Be Empty") String patientID, String medicalHistoryText) {
        this.patientID = patientID;
        MedicalHistoryText = medicalHistoryText;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatientID() {
        return patientID;
    }

    public void setPatientID(String patientID) {
        this.patientID = patientID;
    }

    public String getMedicalHistoryText() {
        return MedicalHistoryText;
    }

    public void setMedicalHistoryText(String medicalHistoryText) {
        MedicalHistoryText = medicalHistoryText;
    }
}
