import Chart from "react-apexcharts";
import './chart.css'
import { useEffect, useState } from "react";
import { CSVTable } from "../Csv-Parser-Compo/csv-parser";

export const PlayerChart = ({objs,col}) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  
  const func = () => {
    const newObj = {};
    objs.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (!newObj[key]) {
          newObj[key] = [];
        }
        newObj[key].push(item[key]);
      });
    });
    setState(newObj);
    console.log(state);
  };
  
  return (
    <div className="app">
      <button onClick={func}>Get Chart Info</button>
      <div className="row">
        <div className="mixed-chart">

{col.map((key,i) => {
 const chart= {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: state[col[0]],
      },
    },
    series: [
      {
        name: "series-1",
        data: state[key]
      },
    ],
  }
  
  return<>
  <h1>{key}</h1>
    <Chart options={chart.options} series={chart.series} type="bar" width="800"/>
  </>
  })}

    
        </div>
      </div>
    </div>
  );
};
