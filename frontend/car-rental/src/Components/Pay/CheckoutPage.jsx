import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

export function CheckoutPage() {
    const [selectedCountry, setSelectedCountry] = useState('United States')

    const rentalDetails = {
        carName: "Toyota Camry 2023",
        dailyRate: 65.00,
        days: 2,
        total: 130.00,
        extras: {
            insurance: 29.00,
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
                        <h2 className="text-2xl font-bold mb-6">Total: ${rentalDetails.total.toFixed(2)}</h2>

                        {/* Rental Details */}
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gray-200 rounded">
                                    <img
                                        src="imageCar.png"
                                        alt={rentalDetails.carName}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{rentalDetails.carName}</h3>
                                    <p className="text-sm text-gray-600">${rentalDetails.dailyRate.toFixed(2)} × {rentalDetails.days} days</p>
                                </div>
                                <div className="ml-auto">
                                    ${(rentalDetails.dailyRate * rentalDetails.days).toFixed(2)}
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Insurance Protection</span>
                                    <span>${rentalDetails.extras.insurance.toFixed(2)}</span>
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
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">
                                    Card information
                                </label>
                                <input
                                    type="text"
                                    id="card"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="1234 1234 1234 1234"
                                />
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <input
                                        type="text"
                                        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="MM / YY"
                                    />
                                    <input
                                        type="text"
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
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                                    Country or region
                                </label>
                                <select
                                    id="country"
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4"
                                    placeholder="ZIP"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Pay ${rentalDetails.total.toFixed(2)}
                            </button>
                        </form>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage

