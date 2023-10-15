package com.boot.finalproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admindetails")

public class Admin {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private long adminid;

	@Column(name = "adminemailid")
	private String adminemailid;

	@Column(name="adminpassword")
	private String adminpassword;

	public Admin() {

	}

	public Admin(String adminemailid, String adminpassword) {
		super();
		this.adminemailid = adminemailid;
		this.adminpassword = adminpassword;
	}

	public String getAdminemailid() {
		return adminemailid;
	}

	public String getAdminpassword() {
		return adminpassword;
	}

}
