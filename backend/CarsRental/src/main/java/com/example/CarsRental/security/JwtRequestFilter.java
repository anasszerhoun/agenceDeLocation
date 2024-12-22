
 package com.example.CarsRental.security;


/*import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.ServletException;
import java.io.IOException;

@Component

public class JwtRequestFilter extends OncePerRequestFilter {

    private final JwtToken jwtToken;
    private final UserDetailsService userDetailsService;

    @Autowired
    public JwtRequestFilter(JwtToken jwtToken, UserDetailsService userDetailsService) {
        this.jwtToken = jwtToken;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");

        System.out.println(authorizationHeader);

        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtToken.extractUsername(jwt);
            System.out.println("JWT: " + jwt); // Debug
            System.out.println("Username: " + username); // Debug
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

            if (jwtToken.validateToken(jwt, userDetails.getUsername())) {
                var authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
*/

 import jakarta.servlet.FilterChain;
 import jakarta.servlet.http.Cookie;
 import jakarta.servlet.http.HttpServletRequest;
 import jakarta.servlet.http.HttpServletResponse;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
 import org.springframework.security.core.context.SecurityContextHolder;
 import org.springframework.security.core.userdetails.UserDetails;
 import org.springframework.security.core.userdetails.UserDetailsService;
 import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
 import org.springframework.stereotype.Component;
 import org.springframework.web.filter.OncePerRequestFilter;

 import java.io.IOException;

 @Component
 public class JwtRequestFilter extends OncePerRequestFilter {

     private final JwtToken jwtToken;
     private final UserDetailsService userDetailsService;

     @Autowired
     public JwtRequestFilter(JwtToken jwtToken, UserDetailsService userDetailsService) {
         this.jwtToken = jwtToken;
         this.userDetailsService = userDetailsService;
     }

     @Override
     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
             throws IOException, jakarta.servlet.ServletException {

         String jwt = null;
         String username = null;

         if (request.getCookies() != null) {
             for (Cookie cookie : request.getCookies()) {
                 if ("token".equals(cookie.getName())) {
                     jwt = cookie.getValue();
                     break;
                 }
             }
         }

         if (jwt != null) {
             username = jwtToken.extractUsername(jwt);
             System.out.println("JWT: " + jwt);
             System.out.println("Username: " + username);
         }

         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
             UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

             if (jwtToken.validateToken(jwt, userDetails.getUsername())) {
                 var authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                 authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                 SecurityContextHolder.getContext().setAuthentication(authToken);
             }
         }
         filterChain.doFilter(request, response);
     }
 }

