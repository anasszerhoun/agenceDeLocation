package com.example.CarsRental.config;

import io.minio.MinioClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MinioConfig {

    @Bean
    public MinioClient minioClient() {
        return MinioClient.builder()
                .endpoint("http://127.0.0.1:9000") // Replace with your MinIO server URL
                .credentials("minioadmin", "minioadmin") // Replace with your MinIO credentials
                .build();
    }
}
