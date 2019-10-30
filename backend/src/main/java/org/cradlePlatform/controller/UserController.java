/**
 * UserController handles the common functions available to all User types.
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

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
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
        String username = user.getUsername();
        Optional<User> optionalUser = userRepository.findUserByUsername(username);

        String userId = "No user found";
        if (optionalUser.isPresent()) {
            User validUser = optionalUser.get();
            userId = validUser.getId();
        }

        return userId;
    }

    @PostMapping(path="/api/users/login")
    @ResponseStatus(code = HttpStatus.OK)
    public @ResponseBody ResponseEntity<String> authenticateUser(@RequestBody User user){
        boolean isValid = false;
        String password = user.getPassword();
        String username = user.getUsername();
        isValid = userService.authenticateUser(username, password);

        if (isValid) {
            Optional<User> optionalUser = userRepository.findUserByUsername(username);
            if (optionalUser.isPresent()) {
                User validUser = optionalUser.get();
                String userId = validUser.getId();
                return new ResponseEntity<String>(userService.getResponseToken(userId), HttpStatus.OK);
            }
        }

        return new ResponseEntity<String>("Unauthorized User", HttpStatus.UNAUTHORIZED);
    }

}
