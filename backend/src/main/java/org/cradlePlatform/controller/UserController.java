/**
 * UserController handles the common functions available to all User types.
 * Does not handle account log-in or log-out.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.User;
import org.cradlePlatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/api/users")
    public String addUser(@RequestParam String username,
                                        @RequestParam String password){
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);

        userRepository.save(newUser);

        return "Saved New User";
    }

    @GetMapping(path="/api/users")
    public Iterable<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping(path="/api/users/{id}")
    public @ResponseBody Optional<User> getUserById(@PathVariable(value = "id") String referrer_id){
        return userRepository.findById(referrer_id);
    }
}
