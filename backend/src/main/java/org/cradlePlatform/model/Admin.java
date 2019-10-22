/**
 * The Admin class represents an Admin-level user.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "Admin")
public class Admin {

    @Id
    @Column(name="id")
    @NotBlank(message = "ID can't be empty")
    private String id;

    public Admin() {
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