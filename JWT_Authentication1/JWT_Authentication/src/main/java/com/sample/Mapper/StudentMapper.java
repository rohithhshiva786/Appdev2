package com.sample.Mapper;

import com.sample.dto.Studentdto;
import com.sample.entity.Student;

public class StudentMapper {
    public static Studentdto mapUserdto(Student student){
        return new Studentdto(
            student.getUser_id(),
            student.getUser(),
            student.getPhonenumber(),
            student.getEmail(),
            student.getPass(),
            student.getConfirmpass());

        }
        public static Student maptoStudent(Studentdto studto){
            return new Student(
                studto.getId(),
                studto.getName(),
                studto.getPhonenumber(),
                studto.getEmail(),
                studto.getPassword(),
                studto.getConfirmpass());

        }
    }

