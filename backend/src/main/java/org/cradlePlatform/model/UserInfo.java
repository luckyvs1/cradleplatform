/**
 * The UserInfo class represents a user and their personal information.
 * A User's information will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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
    @Column(name = "at_a_station_no")
    private String attestationNumber;

    @NotBlank
    @Size(max = 32)
    @Column(name = "first_name")
    private String firstName;

    @NotBlank
    @Size(max = 32)
    @Column(name = "last_name")
    private String lastName;

    @NotNull
    @Column(name = "dob")
    private Date dateOfBirth;

    @NotBlank
    @Size(max = 32)
    private String country;

    @NotBlank
    @Size(max = 16)
    private String phone;

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

    public String getAttestationNumber() {
        return attestationNumber;
    }

    public void setAttestationNumber(String attestationNumber) {
        this.attestationNumber = attestationNumber;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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
}