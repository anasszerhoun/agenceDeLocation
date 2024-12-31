package com.example.CarsRental.dto;

public class MonthlyRentalStatsDTO {
    private int month;
    private int year;
    private long totalRentals;
    private double totalProfit;  // Changed to double for more precision

    // Constructor with the totalRentals and totalProfit parameters
    public MonthlyRentalStatsDTO(int month, int year, long totalRentals, double totalProfit) {
        this.month = month;
        this.year = year;
        this.totalRentals = totalRentals;
        this.totalProfit = totalProfit;
    }

    // Default constructor for setting month and year
    public MonthlyRentalStatsDTO(int month, int year) {
        this.month = month;
        this.year = year;
        this.totalRentals = 0;  // Default value
        this.totalProfit = 0.0;  // Default value
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public long getTotalRentals() {
        return totalRentals;
    }

    public void setTotalRentals(long totalRentals) {
        this.totalRentals = totalRentals;
    }

    public double getTotalProfit() {
        return totalProfit;
    }

    public void setTotalProfit(double totalProfit) {
        this.totalProfit = totalProfit;
    }
}
