package org.cradlePlatform.controller;

import org.cradlePlatform.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(path="admin") //This means URL's start with /admin (after Application path)
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

}
