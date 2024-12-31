import { useState, useEffect } from 'react';
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

export default function AreaCards() {
  const [totalCars, setTotalCars] = useState(0);
  const [rentedCars, setRentedCars] = useState(0);
  const [maintenanceCars, setMaintenanceCars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allCarsResponse, rentedCarsResponse, maintenanceResponse] = await Promise.all([
          fetch("http://localhost:8080/dashboard/all_cars", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }),
          fetch("http://localhost:8080/dashboard/rented_cars", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }),
          fetch("http://localhost:8080/dashboard/maintenance", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ]);

        if (!allCarsResponse.ok || !rentedCarsResponse.ok || !maintenanceResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const [allCarsData, rentedCarsData, maintenanceData] = await Promise.all([
          allCarsResponse.json(),
          rentedCarsResponse.json(),
          maintenanceResponse.json()
        ]);

        setTotalCars(allCarsData.length);
        setRentedCars(rentedCarsData.length);
        setMaintenanceCars(maintenanceData.length);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calculate percentages
  const rentedPercentage = totalCars > 0
    ? Math.round((rentedCars / totalCars) * 100)
    : 0;

  const maintenancePercentage = totalCars > 0
    ? Math.round((maintenanceCars / totalCars) * 100)
    : 0;

  const availablePercentage = totalCars > 0
    ? Math.round(((totalCars - rentedCars - maintenanceCars) / totalCars) * 100)
    : 0;

  return (
    <div style={{ padding: " 1rem 0" }}>
      <h2 className="content-area-title" style={{
        color: "#f4f4f4",
      }}>Total Fleet: {totalCars} Cars</h2>
      <section className="content-area-cards">
        <AreaCard
          colors={["#e4e8ef", "#475be8"]}
          percentFillValue={rentedPercentage}
          cardInfo={{
            title: "Rented Cars",
            value: rentedCars,
            text: `${rentedPercentage}% of total fleet`,
          }}
        />
        <AreaCard
          colors={["#e4e8ef", "#ff6b6b"]}
          percentFillValue={maintenancePercentage}
          cardInfo={{
            title: "Cars in Maintenance",
            value: maintenanceCars,
            text: `${maintenancePercentage}% of total fleet`,
          }}
        />
        <AreaCard
          colors={["#e4e8ef", "#51cf66"]}
          percentFillValue={availablePercentage}
          cardInfo={{
            title: "Available Cars",
            value: totalCars - rentedCars - maintenanceCars,
            text: `${availablePercentage}% of total fleet`,
          }}
        />
      </section>
    </div>
  );
}