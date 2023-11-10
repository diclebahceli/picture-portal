package com.hoaxify.ws.user;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
     
    @PostMapping("/api/1.0/users")
    void createUser(@RequestBody Object user){
        System.out.println(user);
    }
}
