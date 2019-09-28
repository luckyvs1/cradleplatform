package org.cradlePlatform.model;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable=false)
    private String id;

    @Column(name="username", nullable=false)
    @NotEmpty(message = "Enter Username")
    @Size(max = 16)
    private String  username;

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

}