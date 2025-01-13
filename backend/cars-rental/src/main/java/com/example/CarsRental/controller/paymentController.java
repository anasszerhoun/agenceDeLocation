package com.example.CarsRental.controller;

import com.example.CarsRental.service.paypalService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/paypal")
@CrossOrigin(origins = "http://localhost:3000")
public class paymentController {

    @Autowired
    private paypalService payPalService;

    @PostMapping("/pay")
    public String pay(@RequestParam("amount") Double amount) {
        try {
            Payment payment = payPalService.createPayment(amount, "USD", "paypal",
                    "sale", "Payment description",
                    "http://localhost:8080/paypal/cancel",
                    "http://localhost:8080/paypal/success");

            for (Links link : payment.getLinks()) {
                if (link.getRel().equals("approval_url")) {
                    return "{\"approvalUrl\": \"" + link.getHref() + "\"}";
                }
            }
        } catch (PayPalRESTException e) {
            e.printStackTrace();
        }
        return "{\"error\": \"Payment creation failed\"}";
    }

    @GetMapping("/success")
    public ResponseEntity<Void> success(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
        try {
            Payment payment = payPalService.executePayment(paymentId, payerId);
            if (payment.getState().equals("approved")) {
                String redirectUrl = "http://localhost:3000/success";
                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(URI.create(redirectUrl));
                return new ResponseEntity<>(headers, HttpStatus.FOUND);
            }
        } catch (PayPalRESTException e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().build();
    }


    @GetMapping("/cancel")
    public String cancel() {
        return "Payment cancelled!";
    }
}
