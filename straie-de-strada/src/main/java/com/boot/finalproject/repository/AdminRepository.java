package com.boot.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.finalproject.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	public Admin findByAdminemailidAndAdminpassword(String adminemailid,String adminpassword);
}
