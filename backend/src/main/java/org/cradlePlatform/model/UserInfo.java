/**
 * The UserInfo class represents a user and their personal information.
 * A User's information will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "User_Info", schema = "schemas")
public class UserInfo {

    @Id
    @NotBlank
    @Size(max = 32)
    private String id;

    @NotBlank
    @Size(max = 32)
    @Column(name = "first_name")
    private String firstName;

    @NotBlank
    @Size(max = 32)
    @Column(name = "last_name")
    private String lastName;

    @NotNull
    @Temporal(TemporalType.DATE)
    @Column(name = "dob")
    private Date dateOfBirth;

    @NotBlank
    @Size(max = 32)
    private String country;

    @NotBlank
    @Size(max = 16)
    @Column(name = "phone")
    private String phoneNumber;

    @Size(max = 32)
    private String email;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public RoleType getRole() {
        return role;
    }

    public void setRole(RoleType role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return String.format(
                "{id: %s, firstName: '%s', lastName: '%s', dateOfBirth: '%s', " +
                        "country: '%s', phoneNumber: '%s', email: '%s', RoleType: '%s'}",
                id, firstName, lastName, new SimpleDateFormat("yyyy-MM-dd").format(dateOfBirth),
                country, phoneNumber, email, role);
    }
}