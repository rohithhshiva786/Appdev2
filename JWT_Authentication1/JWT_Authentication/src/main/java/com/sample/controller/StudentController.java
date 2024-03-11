package com.sample.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.dto.Studentdto;
import com.sample.service.StudentService;

import lombok.AllArgsConstructor;

@CrossOrigin("http://localhost:5173")
@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private StudentService studService;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<Studentdto> createStudent(@RequestBody Studentdto studentdto) {
        Studentdto savedStudent = studService.createStud(studentdto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<Studentdto> getStudentId(@PathVariable("id") Long user_id ) {
        Studentdto studentdto = studService.getStudentById(user_id);
        return ResponseEntity.ok(studentdto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<Studentdto>> getAllStudent() {
        List<Studentdto> students = studService.getAllStudent();
        return ResponseEntity.ok(students);
    }

}



