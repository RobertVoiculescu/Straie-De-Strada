package com.boot.finalproject.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boot.finalproject.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
   
}

