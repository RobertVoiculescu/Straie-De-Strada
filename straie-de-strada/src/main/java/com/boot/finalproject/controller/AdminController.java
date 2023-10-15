package com.boot.finalproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.finalproject.model.Admin;
import com.boot.finalproject.model.RegistrationUser;
import com.boot.finalproject.model.User;
import com.boot.finalproject.repository.RegistrationRepository;
import com.boot.finalproject.repository.UserRepository;
import com.boot.finalproject.services.AdminService;
import com.boot.finalproject.services.RegistrationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("pradeep/admin")

public class AdminController {
	
	@Autowired
	private AdminService adminservice;
	
	@Autowired
	private RegistrationRepository reguserrepo;
	
	@Autowired
	private UserRepository usermessage;
	
	
	
	@PostMapping("/loginadmin")
	   public Admin adminlogin(@RequestBody Admin regadmin) throws Exception {
		    String tempEmailId=regadmin.getAdminemailid();
		    String tempPassword=regadmin.getAdminpassword();
		    Admin UserObj=null;
		    if(tempEmailId != null && tempPassword!=null ) {
		    	UserObj=adminservice.findByAdminemailidAndAdminpassword(tempEmailId, tempPassword);
		    }
		    if(UserObj==null) {
		    	throw new Exception("Admin does't exist");
		    }
		    return UserObj;
	   }
	//showing reg users to admin
	@GetMapping("/regusers")
	public List<RegistrationUser> getAllUsers(){
		return reguserrepo.findAll();
		
	}
	
	//showing customer query message
	@GetMapping("/regusermessage")
	public List<User> getAllMessages(){
		return usermessage.findAll();
	}
	
	
}
