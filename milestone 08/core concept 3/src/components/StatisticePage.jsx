import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
const StatisticsPage = ({ donations, totalDonations }) => {
    const percentage = ((donations / totalDonations) * 100).toFixed(2); // Calculate the percentage
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Create the pie chart when the component mounts
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Your Donations", "Other Donations"],
          datasets: [
            {
              data: [donations, totalDonations - donations],
              backgroundColor: ["#FF5733", "#36A2EB"], // You can customize the colors
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true,
          },
        },
      });
    }, [donations, totalDonations]);
  
    return (
      <div>
        <h1>Your Donations vs. Total Donations</h1>
        <p>Your donations: {donations}</p>
        <p>Total donations: {totalDonations}</p>
        <p>Percentage: {percentage}%</p>
        <canvas ref={chartRef} />
      </div>
    );
  };
  
  export default StatisticsPage;
  