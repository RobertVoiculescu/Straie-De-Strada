package com.boot.finalproject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.finalproject.exception.ResourceNotFoundExeption;
import com.boot.finalproject.model.User;
import com.boot.finalproject.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/pradeep/usercontact")
public class UserController {
      
	@Autowired
	 private UserRepository userrepository;
	
	//get all employees from database
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userrepository.findAll();
	}
	
	//create users rest api
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userrepository.save(user);
	}
	
	
}
