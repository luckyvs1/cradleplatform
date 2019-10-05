/**
 * The HealthWorker class represents a healthworker.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name = "Healthworker")
public class HealthWorker implements Serializable {

    @Id
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID can't be empty")
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
