import React from "react";
import "./ChartBar.css";

function ChartBar(params) {
  let barFillHeight = "0%";

  console.log(params.maxValue);
  console.log(params.value);
  if (params.maxValue > 0) {
    barFillHeight = Math.round((params.value / params.maxValue) * 100) + '%';
  }

  console.log({ height: barFillHeight  + " bar height"});
  console.log(params.label);
  return (
      <div>
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barFillHeight }} >
        </div>
        <div className="chart-bar__label">{params.label}</div>
      </div>
    </div>
    </div>
  );
}

export default ChartBar;
