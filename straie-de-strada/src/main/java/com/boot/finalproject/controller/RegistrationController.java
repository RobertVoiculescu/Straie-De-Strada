package com.boot.finalproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.finalproject.model.RegistrationUser;
import com.boot.finalproject.services.RegistrationService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("pradeep/anudip/deeptech/final/project")
public class RegistrationController {

	@Autowired
	private RegistrationService regservice;

	//register api
   @PostMapping("/registeruser")
   public RegistrationUser registerUser(@RequestBody RegistrationUser reguser) throws Exception {
	   String tempEmailId=reguser.getEmailid();

	   if(tempEmailId != null && !"".equals(tempEmailId)) {
		   RegistrationUser UserObj= regservice.fetchUserByEmailId(tempEmailId);
		   if(UserObj!=null) {
			   throw new Exception("Contul cu emailul "+tempEmailId+" există deja.");
		   }
	   }
	   RegistrationUser UserObj=null;
	   UserObj=regservice.saveRegisteredUser(reguser);
	   return UserObj;
   }

   //login api
   @PostMapping("/loginuser")
   public RegistrationUser loginUser(@RequestBody RegistrationUser reguser) throws Exception {
	    String tempEmailId=reguser.getEmailid();
	    String tempPassword=reguser.getPassword();
	    RegistrationUser UserObj=null;
	    if(tempEmailId != null && tempPassword!=null ) {
	    	UserObj=regservice.fetchUserByEmailIdandPassword(tempEmailId, tempPassword);
	    }
	    if(UserObj==null) {
	    	throw new Exception("Cont inexistent");
	    }
	    return UserObj;
   }

}
