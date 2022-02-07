import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"


function Chart(params) {
    console.log(params.dataPoints+ "Chart data points")
  const dataPointValues = params.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues); //spread ... operator pull out all array elements
  console.log(dataPointValues + " received data points ");
  console.log(...dataPointValues);
  return (
    <div className="chart">
        { console.log(params.dataPoints[0].value + " data points") }
      {params.dataPoints.map((dataPoint) => (
        <ChartBar
    
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
