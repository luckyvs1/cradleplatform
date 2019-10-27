/**
 * LoginController handles functions related to account log-in and log-out of Cradle Platform.
 * This class contains REST endpoints for login/logout and calls classes such as DBService
 * to verify login information.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044"})
@RestController
public class LoginController {

	@GetMapping("/hello")
	@ResponseStatus(HttpStatus.OK)
	public String printHello() {
		return "Hello Mars!\n";
	}

	@PostMapping("/api/login")
	@ResponseStatus(HttpStatus.OK)
	public User logIn(@RequestBody User user) {
		// TODO: Implement log in
		User account = new User();
		account.setUsername("Testuser");
		account.setPassword("Testpass");
		return account;

	}

}
