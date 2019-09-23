/**
 * LoginController handles functions related to account log-in and log-out of Cradle Platform.
 * This class contains REST endpoints for login/logout and calls classes such as DBService
 * to verify login information.
 */
package org.cradlePlatform.controller;

import java.util.HashMap;
import org.cradlePlatform.model.LoginRequest;
import org.cradlePlatform.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

	@GetMapping("/hello")
	@ResponseStatus(HttpStatus.OK)
	public String printHello() {
		return "Hello Mars!\n";
	}

	@PostMapping("/login")
	@ResponseStatus(HttpStatus.OK)
	public User logIn(@RequestBody LoginRequest user) {
		boolean isVerified = DBService.verifyUsernamePassword(user.getUsername(), user.getPassword());
		if (isVerified) {
			User account = DBService.loadUserFromDb(user.getUsername());
			return account;
		}
		System.out.println("Username or password is incorrect, try again");
		// TODO: Throw exception?
		return null;
	}

}
