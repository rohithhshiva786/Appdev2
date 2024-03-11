package com.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Studentdto {
    private long id;
    private String name;
    private long phonenumber;
    private String email;
    private String password;
    private String confirmpass;
}