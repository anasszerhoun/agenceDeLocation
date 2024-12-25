import React from 'react';
import { Star, ChevronLeft } from 'lucide-react';
import apiRequest from '../../apiRequest';


const CarPreview = () => {

    const car = JSON.parse(localStorage.getItem("selectedCar"));



    const handleBook = () => {
        if(localStorage.getItem("token") === null){
            window.location.href = "/login"
        }
        else{
            const rep = apiRequest("POST","http://localhost:8080/api/car/favoris/add?id="+car.idVehicule);
            window.location.href="/home"
        }
    }
    console.log(car)

    return (
        <div className="bg-gray-100 mt-3 min-h-screen">
            {/* Header Section */}
            <header className="relative h-[500px]">
                <img
                    src="./imageCar.png"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-full mb-4 hover:bg-gray-200 transition">
                        <ChevronLeft className="inline-block mr-2" />
                        Back
                    </button>
                    <h1 className="text-5xl font-bold text-white mb-4">{car.marque}</h1>
                    <p className="text-xl text-gray-300">{car.modele}</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Section - Image Gallery */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {/* {car.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Car ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-lg shadow"
                                />
                            ))} */}
                            
                            <img src="./imageCar.png" className="w-full h-48 object-cover rounded-lg shadow" alt="" />
                            <img src="./imageCar.png" className="w-full h-48 object-cover rounded-lg shadow" alt="" />
                            <img src="./imageCar.png" className="w-full h-48 object-cover rounded-lg shadow" alt="" />
                        </div>
                    </div>

                    {/* Right Section - Details */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Details</h2>
                        <p className="text-gray-600 mb-4">{car.immatriculation}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex justify-between">
                                <span className="font-semibold">Price:</span>
                                <span className="text-lg font-bold">${car.tarif}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Miles:</span>
                                <span>20 Miles</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Fuel Type:</span>
                                <span>{car.type}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Transmission:</span>
                                <span>automatique</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Year:</span>
                                <span>2019</span>
                            </div>
                        </div>

                        <button onClick={handleBook} className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Specifications Section */}
                {/* <section className="mt-12">
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
                </section> */}
            </main>
        </div>
    );
};

export default CarPreview;
