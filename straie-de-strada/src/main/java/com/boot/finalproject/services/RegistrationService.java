package com.boot.finalproject.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.boot.finalproject.model.RegistrationUser;
import com.boot.finalproject.repository.RegistrationRepository;

@Service
public class RegistrationService {
     
	@Autowired
	private RegistrationRepository regrepo;
	
	public RegistrationUser saveRegisteredUser(RegistrationUser reguser) {
		return regrepo.save(reguser);
	}
	
	//checking useremailid from database while registring
	public RegistrationUser fetchUserByEmailId(String email) {
		return regrepo.findByEmailid(email);
	}
	
	public RegistrationUser fetchUserByEmailIdandPassword(String email,String password) {
		return regrepo.findByEmailidAndPassword(email, password);
	}
	
}