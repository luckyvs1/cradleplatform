/**
 * User class represents a user of the software.
 * Any common members or functions will be found in this file.
 */
package org.cradlePlatform.model;

public class User {
	private String username;
	private Role role;

	public User() {
		this.username = "";
		this.role = null;
	}

	public User(String username, Role role) {
		this.username = username;
		this.role = role;
	}

	public User(String username, String role) {
		this.username = username;
		this.role = Role.valueOf(role);
	}

	public String getUsername() {
		return username;
	}

	public boolean hasRole(Role role) {
		if (this.role == role) {
			return true;
		}
		return false;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

}
