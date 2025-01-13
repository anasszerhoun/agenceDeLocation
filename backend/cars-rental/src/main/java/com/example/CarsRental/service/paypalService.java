package com.example.CarsRental.service;

import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class paypalService {

    private final String clientId;
    private final String clientSecret;
    private final String mode;
    private final APIContext apiContext;

    public paypalService(@Value("${paypal.client.id}") String clientId,
                         @Value("${paypal.client.secret}") String clientSecret,
                         @Value("${paypal.mode}") String mode) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.mode = mode;

        this.apiContext = new APIContext(clientId, clientSecret, mode);
    }

    public Payment createPayment(Double total, String currency, String method, String intent, String description, String cancelUrl, String successUrl) throws PayPalRESTException {
        Amount amount = new Amount();
        amount.setCurrency(currency);
        amount.setTotal(String.format("%.2f", total));

        Transaction transaction = new Transaction();
        transaction.setDescription(description);
        transaction.setAmount(amount);

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        Payer payer = new Payer();
        payer.setPaymentMethod(method);

        Payment payment = new Payment();
        payment.setIntent(intent);
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl(cancelUrl);
        redirectUrls.setReturnUrl(successUrl);
        payment.setRedirectUrls(redirectUrls);

        return payment.create(apiContext);
    }

    public Payment executePayment(String paymentId, String payerId) throws PayPalRESTException {
        Payment payment = new Payment();
        payment.setId(paymentId);
        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(payerId);
        return payment.execute(apiContext, paymentExecution);
    }
}
