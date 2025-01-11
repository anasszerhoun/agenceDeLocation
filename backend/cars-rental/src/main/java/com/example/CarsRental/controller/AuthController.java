package com.example.CarsRental.controller;

import com.example.CarsRental.entity.Admin;
import com.example.CarsRental.entity.Client;
import com.example.CarsRental.service.adminService;
import com.example.CarsRental.service.clientService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.example.CarsRental.security.JwtToken;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    /* private final AuthenticationManager authenticationManager; */
    private final JwtToken jwtToken;
    private clientService service;

    @Autowired
    private adminService adminService;


    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtToken jwtToken, clientService service) {
        // this.authenticationManager = authenticationManager;
        this.jwtToken = jwtToken;
        this.service = service;
    }

    @GetMapping("/")
    public String home() {
        return "Welcome to the application!";
    }

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Client client) {

        if (service.findByEmail(client.getMail()) == null) {
            service.save(client);
            return ResponseEntity.ok().body(true);
        } else {
            return ResponseEntity.ok().body(false);
        }
    }

    @GetMapping("/login")
    public ResponseEntity<String> login(@RequestParam("mail") String mail, @RequestParam("password") String password,
            HttpServletResponse response) {
        try {
            UserDetails userDetails = userDetailsService.loadUserByUsername(mail);

            if (passwordEncoder.matches(password, userDetails.getPassword())) {
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(mail, password));
                String token = jwtToken.generateToken(mail);
                Cookie cookie = new Cookie("token", token);
                cookie.setHttpOnly(true);
                cookie.setSecure(true);
                cookie.setPath("/");
                cookie.setMaxAge(86400);
                response.addCookie(cookie);
                return ResponseEntity.ok("Token: Bearer " + token);
            } else {
                return ResponseEntity.status(401).body("Invalid username or password");
            }
        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
    @GetMapping("/loginAdmin")
    public ResponseEntity<String> loginAdmin(@RequestParam("mail") String email, @RequestParam("password") String password,
                                             HttpServletResponse response) {
        try {

            Admin admin = adminService.findByEmail(email);

            if (admin != null && passwordEncoder.matches(password, admin.getPassword())) {

                String token = jwtToken.generateToken(email);

                return ResponseEntity.ok("Token: Bearer " + token);
            } else {
                return ResponseEntity.status(401).body("Invalid email or password");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("An error occurred");
        }
    }

}
