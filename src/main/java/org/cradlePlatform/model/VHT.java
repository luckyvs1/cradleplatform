package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "VHT")
public class VHT {

    @Id
    @NotEmpty(message = "ID can't be empty")
    @OneToOne(cascade = CascadeType.REMOVE)
    private String id;

    public VHT() {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}