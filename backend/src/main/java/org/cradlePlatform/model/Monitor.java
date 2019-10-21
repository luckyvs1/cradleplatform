package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@IdClass(MonitorId.class)
@Table(name = "Monitor", schema = "schemas")
public class Monitor{

    @Id
    @NotBlank
    @Column(name = "VHT_id")
    private String vhtId;

    @Id
    @NotBlank
    @Column(name = "patient_id")
    private String patientId;

    public Monitor(String vhtId, String patientId) {
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

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }
}
