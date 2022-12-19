import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = (teachers) => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [2, 3, 4, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
    options:{
        responsive: true,}
  };
  return (
    <div style={{ width: 650, textAlign: "center" }}>
      <Bar data={data} width={50} height={50} />
    </div>
  );
};

export default BarChart;
