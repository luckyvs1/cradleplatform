/**
 * UserController handles the common functions available to all User types.
 * Does not handle account log-in or log-out.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.User;
import org.cradlePlatform.repository.UserRepository;
import org.cradlePlatform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    // GET mappings
    @GetMapping(path="/api/users/")
    public @ResponseBody Iterable<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping(path="/api/users/{id}")
    public @ResponseBody
    Optional<User> getUserById(@PathVariable(value = "id") String user_id){
        return userRepository.findById(user_id);
    }

    // POST mappings
    @PostMapping(path="/api/users")
    @ResponseStatus(code = HttpStatus.CREATED)
    public @ResponseBody String addUser(@RequestBody User user){
        userService.saveUser(user);
        return "Saved New User";
    }

    @PostMapping(path="/api/users/login")
    @ResponseStatus(code = HttpStatus.OK)
    public @ResponseBody ResponseEntity<String> authenticateUser(@RequestBody User user){
        boolean isValid = false;
        String password = user.getPassword();
        String username = user.getUsername();
        isValid = userService.authenticateUser(username, password);

        if (isValid) {
            User validUser = new User();
            validUser = userRepository.findUserByUsername(username);
            String userId = validUser.getId();

            return new ResponseEntity<String>(userService.getResponseToken(userId), HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Authenticated User " + String.valueOf(isValid), HttpStatus.UNAUTHORIZED);
        }
    }

}
