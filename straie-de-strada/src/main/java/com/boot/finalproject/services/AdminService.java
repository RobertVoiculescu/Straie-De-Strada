package com.boot.finalproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.boot.finalproject.model.Admin;
import com.boot.finalproject.repository.AdminRepository;

@Service
public class AdminService {
   
	@Autowired
	private AdminRepository adminrepo;
	
	
	public Admin findByAdminemailidAndAdminpassword(String adminemailid,String adminpassword) {
		return adminrepo.findByAdminemailidAndAdminpassword(adminemailid, adminpassword);
	}
}
