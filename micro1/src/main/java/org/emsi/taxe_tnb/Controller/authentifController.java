package org.emsi.taxe_tnb.Controller;

import org.emsi.taxe_tnb.Service.authentifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = {"http://localhost:8081/", "http://localhost:4200/"})
@RestController
@RequestMapping("/auth")
public class authentifController {
	
	@Autowired
	authentifService authentifservice;
	
	@PostMapping("/login")
	public String triggerServiceRequest() {
	    authentifservice.makeRequest();
	    return "Request triggered successfully!";
	}


}
