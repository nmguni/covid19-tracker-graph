import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/api.js";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.scss";

const Chat = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);
  // LINE CHART
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#1f4287",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "#e41749",
            backgroundColor: "#e4174a69",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // BAR CHART
  const barchart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recoverd", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              " rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}> {country ? barchart : lineChart} </div>
  );
};

export default Chat;
