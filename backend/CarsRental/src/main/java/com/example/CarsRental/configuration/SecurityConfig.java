package com.example.CarsRental.configuration;

import com.example.CarsRental.security.JwtRequestFilter;
import com.example.CarsRental.security.JwtToken;
import com.example.CarsRental.security.customDetails.customDetailsClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
public class SecurityConfig {

    private final JwtToken jwtToken;
    private final customDetailsClient clientDetails;
    private final JwtRequestFilter jwtRequestFilter;

    @Autowired
    public SecurityConfig(JwtToken jwtToken, customDetailsClient clientDetails, JwtRequestFilter jwtRequestFilter) {
        this.jwtToken = jwtToken;
        this.clientDetails = clientDetails;
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/login", "/login","/api/auth/register" ,"/api/car/search","/api/car/favoris","/api/car/favoris/add"
                                ,"/api/car/favoris/remove").permitAll()
                        .requestMatchers("api/auth/sayHello").authenticated()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();  // Utilisation de BCrypt pour encoder et comparer les mots de passe
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
