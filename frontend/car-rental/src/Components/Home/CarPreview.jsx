import React from 'react';
import { Star, ChevronLeft } from 'lucide-react';

const CarPreview = () => {
    const car = {
        name: 'BMW X5 - 2022',
        description: 'xDrive40i M Sport SUV',
        miles: 25,
        fuelType: 'Diesel',
        transmission: 'Automatic',
        year: 2022,
        price: 45000,
        images: [
            'imageCar.png',
            'imageCar.png',
            'imageCar.png',
        ],
        specifications: {
            engine: '3.0L Turbocharged',
            horsepower: '335 hp',
            drivetrain: 'All-Wheel Drive',
            seats: 5,
        },
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <header className="relative h-[500px]">
                <img
                    src={car.images[0]}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-full mb-4 hover:bg-gray-200 transition">
                        <ChevronLeft className="inline-block mr-2" />
                        Back
                    </button>
                    <h1 className="text-5xl font-bold text-white mb-4">{car.name}</h1>
                    <p className="text-xl text-gray-300">{car.description}</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Section - Image Gallery */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {car.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Car ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-lg shadow"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Details */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Details</h2>
                        <p className="text-gray-600 mb-4">{car.description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex justify-between">
                                <span className="font-semibold">Price:</span>
                                <span className="text-lg font-bold">${car.price.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Miles:</span>
                                <span>{car.miles} Miles</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Fuel Type:</span>
                                <span>{car.fuelType}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Transmission:</span>
                                <span>{car.transmission}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Year:</span>
                                <span>{car.year}</span>
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Specifications Section */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-4">Specifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(car.specifications).map(([key, value]) => (
                            <div
                                key={key}
                                className="bg-white p-4 rounded-lg shadow text-center"
                            >
                                <h3 className="text-lg font-semibold capitalize">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                </h3>
                                <p className="text-gray-600">{value}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            
        </div>
    );
};

export default CarPreview;
