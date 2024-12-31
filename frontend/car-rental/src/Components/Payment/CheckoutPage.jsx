import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import apiRequest from '../../apiRequest'
import axios from 'axios'


export function CheckoutPage() {
    const [selectedCountry, setSelectedCountry] = useState('United States')

    const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));


    const { from, to } = selectedCar.dateRange;


    const startDate = new Date(from);
    const endDate = new Date(to);

    const dailyRate = selectedCar.tarif;
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
    const totalPrice = dailyRate * totalDays;

    console.log(dailyRate, totalDays, totalPrice)

    const rentalDetails = {
        carName: "Toyota Camry 2023",
        dailyRate: 65.00,
        days: 2,
        total: 130.00,
        extras: {
            insurance: 29.00,
        }
    }

    const handleSaveReservation = async (event) => {

        const reservation = {
            totalPrice: totalPrice,
            startDate: startDate,
            endDate: endDate,
            idVehicule: selectedCar.idVehicule,
        };

        event.preventDefault();

        const token = localStorage.getItem("token");

        try {
            const rep = await axios.post('http://localhost:8080/api/car/reservation', reservation, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(rep.data)
            if (rep.data === true) {
                console.log("Reservation saved")
                localStorage.setItem("contrat", "true")
                window.location.href = "/reservation"
            } else {
                console.log("Reservation not saved")
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className=" bg-gray-50">
            <div className="max-w-3xl mx-auto p-4">
                {/* Header */}
                <header className="flex items-center gap-4 mb-8">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold">Car Rental Checkout</h1>
                    </div>
                </header>

                <div className="grid md:grid-cols-1 gap-8">
                    {/* Left Column - Order Summary */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Total: {totalPrice}DH</h2>

                        {/* Rental Details */}
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gray-200 rounded">
                                    <img
                                        src="imageCar.png"
                                        alt={selectedCar.marque}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                                <div>
                                    <div className='d-flex' >
                                        <h4 className="font-semibold">{selectedCar.marque}</h4>
                                        <span className="font-semibold ml-3 mt-1"> - {selectedCar.modele}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{dailyRate}DH × {totalDays} days</p>
                                </div>
                                <div className="ml-auto">
                                    {(dailyRate * totalDays).toFixed(2)}DH
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Right Column - Payment Form */}
                    <div>
                        {/* Apple Pay Button */}


                        <div className="relative mb-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 text-gray-500">Pay with card</span>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">
                                    Card information
                                </label>
                                <input
                                    type="text"
                                    id="card"
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="1234 1234 1234 1234"
                                />
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <input
                                        type="text"
                                        required
                                        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="MM / YY"
                                    />
                                    <input
                                        type="text"
                                        required
                                        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="CVC"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name on card
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4"
                                    placeholder="ZIP"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleSaveReservation}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Pay {totalDays * dailyRate}DH
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage

