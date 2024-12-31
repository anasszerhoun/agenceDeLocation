import React, { useState, useEffect } from 'react';

const AreaProgressChart = () => {
  const [rentalData, setRentalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [marqueResponse, carsResponse] = await Promise.all([
          fetch('http://localhost:8080/dashboard/marques'),
          fetch('http://localhost:8080/dashboard/all_reservations')
        ]);

        const marqueData = await marqueResponse.json();
        const carsData = await carsResponse.json();

        // Calculate percentage for each marque based on total cars
        const processedData = marqueData.map((item, index) => ({
          id: index + 1,
          name: item.marque,
          percentValues: Math.round((item.numberOfRent / carsData.length) * 100)
        }));

        setRentalData(processedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="progress-bar">Loading...</div>;
  }

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Rented Cars</h4>
      </div>
      <div className="progress-bar-list">
        {rentalData?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues} %
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;