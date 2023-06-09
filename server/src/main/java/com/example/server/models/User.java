package com.example.server.models;

import java.awt.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotNull
    private Date date;

    @DBRef
    private Set<Role> roles = new HashSet<>();



    @NotBlank
    @Size(max = 50)
    private String name;

    @NotBlank
    @Size(max = 120)
    private String password;



    @Size(max = 120)
    private String poste;

    @NotBlank
    private String gender;

    public User(String username, String email, String name, String poste, String gender, Date date, String encode) {
        this.username=username;
        this.email=email;
        this.name=name;
        this.poste=poste;
        this.gender=gender;
        this.date= date;
        this.password=encode;

    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }




    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


    public User(String name) {
        this.name = name;
    }


    public User() {
    }

    public User(String username, String email, String name, String poste, String password) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.poste = poste;
        this.password = password;
    }

    public User(String username, String email, String name, String password, String poste, Date date) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.password = password;
        this.poste = poste;
        this.date = date;
    }

    public User(String username, String email, String name, String password, String poste, Date date,byte[] picByte ) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.password = password;
        this.poste = poste;
        this.date = date;

    }

    public User(String username, String email, Date date, Set<Role> roles, String name, String password, String poste, String gender) {
        this.username = username;
        this.email = email;
        this.date = date;
        this.roles = roles;
        this.name = name;
        this.password = password;
        this.poste = poste;
        this.gender = gender;
    }

    public User(String username, String email, Date date, Set<Role> roles, String password, String poste, String gender) {
        this.username = username;
        this.email = email;
        this.date = date;
        this.roles = roles;
        this.password = password;
        this.poste = poste;
        this.gender = gender;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }



    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                '}';
    }

}