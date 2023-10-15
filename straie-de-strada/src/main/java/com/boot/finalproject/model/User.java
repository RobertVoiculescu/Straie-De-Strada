package com.boot.finalproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usercontactinfo")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "name")
	private String name;
    @Column(name = "email")
	private String email;
    @Column(name="phNo")
	private String phNo;
    @Column(name = "productname")
	private String productname;
    @Column(name = "message")
	private String message;
	
	public User() {
		
	}
	
	public User(String name, String email, String phNo, String message,String productname) {
		super();
		this.name = name;
		this.email = email;
		this.phNo = phNo;
		this.message = message;
		this.productname=productname;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhNo() {
		return phNo;
	}
	public void setPhNo(String phNo) {
		this.phNo = phNo;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}
	
	
	
	
	
	
}

