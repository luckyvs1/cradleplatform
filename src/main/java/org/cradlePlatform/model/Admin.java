package org.cradlePlatform.model;

import javax.persistence.*;

@Entity
@Table(name = "Admin")
public class Admin {

    @Id
    @OneToOne(cascade = CascadeType.REMOVE)
    private String id;

    public Admin() {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}