package org.cradlePlatform.controller;

import org.cradlePlatform.model.VHT;
import org.cradlePlatform.repository.VHTRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/vht") //This means URL's start with /vht (after Application path)
public class VHTController {
    @Autowired
    private VHTRepository vhtRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewVHT (@RequestParam String id) {
        VHT newVHT = new VHT();
        newVHT.setId(id);
        vhtRepository.save(newVHT);
        return "Saved VHT";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<VHT> getAllVHTs() {
        //This returns a JSON or XML with the users
        return vhtRepository.findAll();
    }
}
