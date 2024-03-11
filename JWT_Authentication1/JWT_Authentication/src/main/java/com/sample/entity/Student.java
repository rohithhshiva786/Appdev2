package com.sample.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="chessuserss")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;
   
    @Column(name = "UsersName", nullable = false)
    private String user;

    @Column(name ="Phonenumber" , nullable = false)
    private long phonenumber;

    @Column(name ="email_id" , nullable = false, unique = true)
    private String email;

    @Column(name ="pass" , nullable = false)
    private String pass;

    @Column(name = "Confirm_password" , nullable= false)
    private String confirmpass;
    
}
