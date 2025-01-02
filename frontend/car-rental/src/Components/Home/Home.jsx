import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Search, Filter } from 'lucide-react';
import axios from "axios"

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 100000 });
    // const [startDate, setStartDate] = useState(''); // Start date of rental
    // const [endDate, setEndDate] = useState(''); // End date of rental
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Update for 4 cards in a row
    const [carData, setCarData] = useState([]);

    const carBrands = [
        { name: 'Audi', icon: '🚗' },
        { name: 'BMW', icon: '🚙' },
        { name: 'Mercedes', icon: '🚘' },
        { name: 'Volkswagen', icon: '🚐' },
        { name: 'Toyota', icon: '🚛' },
        { name: 'Honda', icon: '🏎️' },
    ];

    // Filtered and paginated cars
    const filteredCars = useMemo(() => {
        return carData.filter(car =>
            // Search by name or brand
            (car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
            // Price filter
            car.price >= priceFilter.min &&
            car.price <= priceFilter.max
        );
    }, [searchTerm, priceFilter]);

    const paginatedCars = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredCars.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredCars, currentPage]);

    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);



    const getData = async () => {
        const res = await axios.get(
            "http://localhost:8080/api/car/search", {
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        if (res.data) {
            setCarData(res.data);
            console.log(res.data);
        }
    }
    useEffect(() => {
        getData();
    }, []);



    const handleChoose = (index) => {

        const selectedCar = carData[index];


        localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
        window.location.href = "/carPreview";
    }

    return (
        <div className="bg-white-100 mt-3 min-h-screen">
            <section className="relative h-[600px] overflow-hidden">
                <img
                    src="imageCar.png"
                    alt="Luxury car"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-bold mb-4">Drive Your Dreams</h1>
                        <p className="text-xl mb-8">
                            Experience luxury and performance with our premium car rental service. Choose from a wide range of high-end vehicles for your next adventure.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
                            Explore Cars
                        </button>
                    </div>
                </div>
            </section>
            <hr />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Our Brands</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {carBrands.map((brand, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-4xl mb-2">{brand.icon}</div>
                                <h3 className="text-lg font-semibold">{brand.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <hr />

            <section className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {carData.length > 0 ? 'Featured Cars' : 'No Cars Found'}
                </h2>
                <div className="flex flex-wrap space-x-4 mb-8">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search cars by name or brand"
                            className="w-full  pt-3 pb-3 pl-12 border rounded-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label>Price Range:</label>
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-24 p-2 border rounded-lg"
                            value={priceFilter.min}
                            onChange={(e) => setPriceFilter(prev => ({ ...prev, min: Number(e.target.value) }))}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-24 p-2 border rounded-lg"
                            value={priceFilter.max}
                            onChange={(e) => setPriceFilter(prev => ({ ...prev, max: Number(e.target.value) }))}
                        />
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {carData.map((car, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={car.imageUrl} alt={car.marque} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{car.marque}</h3>
                                    <p className="text-gray-600 mb-4">{car.modele}</p>
                                    <hr />
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <span className="ml-1 text-gray-600">3000 Miles</span>
                                        </div>
                                        <span className="text-gray-600">{car.type}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-600">{car.status}</span>
                                        <span className="text-gray-600"></span>
                                    </div>
                                    <hr />

                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold">{car.tarif}DH</span>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300" onClick={() => handleChoose(index)}>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center space-x-4 mt-8">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
                            >
                                <ChevronLeft />
                            </button>
                            <span>{currentPage} of {totalPages}</span>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
