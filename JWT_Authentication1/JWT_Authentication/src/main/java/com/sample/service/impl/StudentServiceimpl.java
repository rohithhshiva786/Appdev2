package com.sample.service.impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.sample.Exception.ResourceNotFoundException;
import com.sample.Mapper.StudentMapper;
import com.sample.dto.Studentdto;
import com.sample.entity.Student;
import com.sample.repository.StudentRepo;
import com.sample.service.StudentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class StudentServiceimpl implements StudentService {

    private StudentRepo studentRepo;

    @Override
    public Studentdto createStud(Studentdto studto) {
        Student student = StudentMapper.maptoStudent(studto);
        Student savedStudent = studentRepo.save(student);
        return StudentMapper.mapUserdto(savedStudent);
    }

    @Override
    public Studentdto getStudentById(Long user_id) {
        Student student = studentRepo.findById(user_id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + user_id));
        return StudentMapper.mapUserdto(student);
    }

    @Override
    public List<Studentdto> getAllStudent() {
        List<Student> students = studentRepo.findAll();
        List<Studentdto> studentDTOs = new ArrayList<>();
        for (Student student : students) {
            studentDTOs.add(StudentMapper.mapUserdto(student));
        }
        return studentDTOs;
    }
}

