/**
 * UserInfoController contains functions to retrieve and add user information of all user types.
 * A user can be found by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.UserInfo;
import org.cradlePlatform.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserInfoController {
    @Autowired
    private UserInfoRepository userInfoRepository;

    @PostMapping(path="/api/user-information")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addUserInfo(@RequestBody UserInfo userInfo){
        UserInfo newUserInfo = new UserInfo();
        newUserInfo.setId(userInfo.getId());
        newUserInfo.setFirstName(userInfo.getFirstName());
        newUserInfo.setLastName(userInfo.getLastName());
        newUserInfo.setDateOfBirth(userInfo.getDateOfBirth());
        newUserInfo.setCountry(userInfo.getCountry());
        newUserInfo.setPhoneNumber(userInfo.getPhoneNumber());
        newUserInfo.setEmail(userInfo.getEmail());
        newUserInfo.setRole(userInfo.getRole());

        userInfoRepository.save(newUserInfo);

        return "Saved User Information";
    }

    @GetMapping(path="/api/user-information")
    public Iterable<UserInfo> getAllUserInfo(){
        return userInfoRepository.findAll();
    }

    @GetMapping(path="/api/user-information/{id}")
    public Optional<UserInfo> getUserInfoById(@PathVariable(value = "id") String userId){
        return userInfoRepository.findById(userId);
    }
}
