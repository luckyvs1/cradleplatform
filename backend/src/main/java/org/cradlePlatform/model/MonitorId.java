package org.cradlePlatform.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

public class MonitorId implements Serializable {

    @Id
    @NotNull
    @Column(name = "VHT_id")
    private String vhtId;

    @Id
    @Column(name = "patient_id")
    private int patientId;

    public MonitorId(String vhtId, int patientId) {
        this.vhtId = vhtId;
        this.patientId = patientId;
    }

    public MonitorId(){
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MonitorId that = (MonitorId) o;

        if (!vhtId.equals(that.patientId)) {
            return false;
        }
        return vhtId.equals(that.patientId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(vhtId, patientId);
    }
}
