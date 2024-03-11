package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Student;

public interface StudentRepo extends JpaRepository<Student,Long> {
    

}