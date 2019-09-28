package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "VHT")
public class VHT {

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