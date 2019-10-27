package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@IdClass(MonitorId.class)
@Table(name = "Monitor")
public class Monitor{

    @Id
    @NotBlank
    @Column(name = "VHT_id")
    private String vhtId;

    @Id
    @Column(name = "patient_id")
    private int patientId;

    public Monitor(String vhtId, int patientId) {
        this.vhtId = vhtId;
        this.patientId = patientId;
    }

    public Monitor() {

    }

    public String getVhtId() {
        return vhtId;
    }

    public void setVhtId(String vhtId) {
        this.vhtId = vhtId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }
}
