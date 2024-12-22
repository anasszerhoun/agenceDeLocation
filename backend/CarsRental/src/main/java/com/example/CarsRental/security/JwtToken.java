/*package com.example.CarsRental.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtToken {

    private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 heure d'expiration
                .signWith(SignatureAlgorithm.HS256, secretKey) // Utiliser HS256 avec la clé secrète
                .compact();
    }

    // Extraire le nom d'utilisateur du token
    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    // Extraire les claims du token
    private Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)  // Utiliser la clé secrète pour valider la signature
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Vérifier si le token a expiré
    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    // Valider le token avec le nom d'utilisateur et vérifier qu'il n'est pas expiré
    public boolean validateToken(String token, String username) {
        return username.equals(extractUsername(token)) && !isTokenExpired(token);
    }
}*/

package com.example.CarsRental.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtToken {
    private static final String SECRET_KEY = "very_secret_key_256bits"; // Une clé de 256 bits est requise pour HS256
    public String generateToken(String username) {
        Algorithm algorithm = Algorithm.HMAC256(SECRET_KEY);

        return JWT.create()
                .withSubject(username) // Sujet (généralement le nom d'utilisateur)
                .withIssuedAt(new Date()) // Date de création
                .withExpiresAt(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // Expiration dans 1 heure
                .sign(algorithm);
    }
    public String extractUsername(String token) {
        DecodedJWT decodedJWT = decodeToken(token);
        return decodedJWT.getSubject();
    }
    private DecodedJWT decodeToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(SECRET_KEY);
        return JWT.require(algorithm)
                .build()
                .verify(token);
    }
    private boolean isTokenExpired(String token) {
        DecodedJWT decodedJWT = decodeToken(token);
        return decodedJWT.getExpiresAt().before(new Date());
    }
    public boolean validateToken(String token, String username) {
        return username.equals(extractUsername(token)) && !isTokenExpired(token);
    }
}

