/**
 * The User class represents a user and their log-in information.
 * Their information will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "User", schema = "schema")
public class User implements Serializable {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name="id", nullable=false)
    private String id;

    @Column(name="username", nullable=false)
    @NotEmpty(message = "Enter Username")
    @Size(max = 16)
    private String username;

    @Column(name="password", nullable=false)
    @NotEmpty(message = "Enter Password")
    @Size(max = 32)
    private String password;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, username='%s', password='%s']",
                id, username, password);
    }
}
