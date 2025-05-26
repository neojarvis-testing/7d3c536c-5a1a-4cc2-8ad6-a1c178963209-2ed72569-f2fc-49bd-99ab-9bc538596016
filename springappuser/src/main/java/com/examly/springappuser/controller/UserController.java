package main.java.com.examly.springappuser.controller;
import com.examly.springappuser.model.User;
import com.examly.springappuser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private main.java.com.examly.springappuser.service.UserService  userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestedBody User user){
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestedBody main.java.com.examly.springappuser.model.User user){
        User loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
        if(loggedInUser!= null){
            return ResponseEntity.ok(loggedInUser);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid credentials");
    }
}
