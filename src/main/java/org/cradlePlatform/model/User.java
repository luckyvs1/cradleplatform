/**
 * User class represents a user of the software.
 * Any common members or functions will be found in this file.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "User")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;

	@NotEmpty(message = "Enter Username")
	@Size(max = 16)
	private String  username;

	@NotEmpty(message = "Enter Password")
	@Size(max = 32)
	private String password;

	public User(){
	}

	//User model
	public User(String id, String username, String password){
		this.id = id;
		this.username = username;
		this.password = password;
	}

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
