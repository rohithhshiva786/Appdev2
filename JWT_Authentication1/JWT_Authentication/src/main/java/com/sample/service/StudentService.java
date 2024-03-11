package com.sample.service;


import java.util.List;

import com.sample.dto.Studentdto;




public interface StudentService {
    Studentdto createStud(Studentdto studto);
    Studentdto getStudentById(Long user_id);
    List<Studentdto> getAllStudent();
}
