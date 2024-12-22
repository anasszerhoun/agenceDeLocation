package com.example.CarsRental.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disable CSRF protection
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().authenticated() // Require authentication for all endpoints
                )
                .httpBasic(); // Use Basic Authentication

        return http.build();
    }
}
