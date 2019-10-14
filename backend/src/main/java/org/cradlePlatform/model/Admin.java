/**
 * The Admin class represents an Admin-level user.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "Admin", schema = "schemas")
public class Admin {

    @Id
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID can't be empty")
    private String id;

    public Admin() {
        this.id = "";
    }

    public Admin(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}