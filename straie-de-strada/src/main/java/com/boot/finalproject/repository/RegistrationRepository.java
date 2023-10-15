package com.boot.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.boot.finalproject.model.RegistrationUser;


public interface RegistrationRepository extends JpaRepository<RegistrationUser, Integer>{

	public RegistrationUser findByEmailid(String emailid);
	
	public RegistrationUser findByEmailidAndPassword(String emailid,String password);
	
	
}