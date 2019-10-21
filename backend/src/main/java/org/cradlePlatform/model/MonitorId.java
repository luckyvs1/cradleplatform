package org.cradlePlatform.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class MonitorId implements Serializable {

    @Id
    @NotNull
    @Column(name = "VHT_id")
    private String vhtId;

    @Id
    @NotNull
    @Column(name = "patient_id")
    private String patientId;

    public MonitorId(String vhtId, String patientId) {
        this.vhtId = vhtId;
        this.patientId = patientId;
    }

    public MonitorId(){
        vhtId = "";
        patientId = "";
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MonitorId that = (MonitorId) o;

        if (!vhtId.equals(that.patientId)) return false;
        return vhtId.equals(that.patientId);
    }

    @Override
    public int hashCode() {
        int result = vhtId.hashCode();
        result = 31 * result + patientId.hashCode();
        return result;
    }
}
