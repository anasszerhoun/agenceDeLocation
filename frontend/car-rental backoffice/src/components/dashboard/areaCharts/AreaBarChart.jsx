import React, { useContext, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import "./AreaCharts.scss";

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/dashboard/moi_stats');
      const rawData = await response.json();

      // Sort data by year and month to ensure correct order
      const sortedData = rawData.sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year;
        return b.month - a.month;
      });

      const transformedData = sortedData.map(item => ({
        month: `${getMonthName(item.month)} ${item.year}`,
        profit: parseFloat((item.totalProfit / 1000).toFixed(1)),
        loss: item.totalRentals,
        fullDate: `${item.month}/${item.year}`
      }));

      setData(transformedData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'short' });
  };

  const getCurrentPageData = () => {
    const startIndex = currentPage * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const calculateGrowth = () => {
    if (data.length < 2) return 5; // Default value if not enough data
    const currentMonth = data[0].profit;
    const lastMonth = data[1].profit;
    const growth = ((currentMonth - lastMonth) / lastMonth) * 100;
    return growth.toFixed(1);
  };

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  if (isLoading) {
    return <div className="bar-chart">Loading...</div>;
  }

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Total Revenue</h5>
        <div className="chart-info-data">
          <div className="info-data-value">
            ${data.length > 0 ? `${data[0].profit}K` : '0K'}
          </div>
          <div className="info-data-text">
            <FaArrowUpLong />
            <p>{calculateGrowth()}% than last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper" style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getCurrentPageData()}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: theme === "light" ? "#676767" : "#f3f3f3",
                fontSize: 14,
              }}
            />
            <YAxis
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: theme === "light" ? "#676767" : "#f3f3f3",
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
              labelStyle={{
                color: theme === "light" ? "#676767" : "#f3f3f3",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              name="Profit"
              dataKey="profit"
              fill="#475be8"
              radius={[4, 4, 4, 4]}
              barSize={24}
            />
            <Bar
              name="Rentals"
              dataKey="loss"
              fill="#e3e7fc"
              radius={[4, 4, 4, 4]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {data.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage + 1} of {Math.ceil(data.length / itemsPerPage)}
          </span>
          <button
            onClick={() => setCurrentPage(prev =>
              Math.min(Math.ceil(data.length / itemsPerPage) - 1, prev + 1)
            )}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage) - 1}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AreaBarChart;