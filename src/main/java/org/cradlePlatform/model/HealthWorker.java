package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "Healthworker")
public class HealthWorker {

    @Id
    @NotEmpty(message = "ID can't be empty")
    @OneToOne(cascade = CascadeType.REMOVE)
    private String id;

    public HealthWorker() {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
