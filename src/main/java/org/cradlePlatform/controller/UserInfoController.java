package org.cradlePlatform.controller;

import org.cradlePlatform.model.RoleType;
import org.cradlePlatform.model.UserInfo;
import org.cradlePlatform.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

public class UserInfoController {
    @Autowired
    private UserInfoRepository userInfoRepository;

    @PostMapping(path="addUserInfo")
    public @ResponseBody String addUserInfo(@RequestParam String id,
                                            @RequestParam String atAStationNo,
                                            @RequestParam String firstName,
                                            @RequestParam String lastName,
                                            @RequestParam Date DOB,
                                            @RequestParam String country,
                                            @RequestParam String phone,
                                            @RequestParam String email,
                                            @RequestParam RoleType role){
        UserInfo newUserInfo = new UserInfo();
        newUserInfo.setId(id);
        newUserInfo.setAtAStationNo(atAStationNo);
        newUserInfo.setFirstName(firstName);
        newUserInfo.setLastName(lastName);
        newUserInfo.setDob(DOB);
        newUserInfo.setCountry(country);
        newUserInfo.setPhone(phone);
        newUserInfo.setEmail(email);
        newUserInfo.setRole(role);

        userInfoRepository.save(newUserInfo);

        return "Saved user Info";
    }

    @GetMapping(path="/getAllUserInfo")
    public @ResponseBody Iterable<UserInfo> getAllUserInfo(){
        return userInfoRepository.findAll();
    }

    @GetMapping(path="/getAllUserInfo/{id}")
    public @ResponseBody
    Optional<UserInfo> getUserInfoById(@PathVariable(value = "id") String userId){
        return userInfoRepository.findById(userId);
    }
}
