import "./App.css";
import { useForm } from "react-hook-form";
import "./index.css";
//import { Chart as ChartJS } from 'chart.js/auto'
//import { Chart }            from 'react-chartjs-2'
import { useEffect, useState } from "react";
import { Data } from "./utils/Data";
import { BarChart } from "./Components/BarChart";
import React from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import TeacherList from "./Components/TeacherList";

function App() {

  const [showRatings, setShowRatings] = useState(false);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
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
          borderWidth: 2,
      }
    ]
  });

  return (
    <div>
      <h1>The Greatest Teacher</h1>
      <div class="float-left">
        <TeacherList/>
      </div>
      <div className="float-left">
      <button className="buttonRatings" onClick={() => setShowRatings(!showRatings)}>Show Teachers' Ratings</button>
      </div>
      {showRatings && <BarChart chartData={chartData} /> }
    </div>
  );
}
export default App

