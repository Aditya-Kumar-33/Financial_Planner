import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Principal", value: 25000, color: "#007bff" }, // Blue
  { name: "Preliminary", value: 5000, color: "#ffc107" }, // Yellow
  { name: "Percent", value: 2500, color: "#ff0080" }, // Pink
];

const DonutChart = ({}) => {
  return (
    <>
      <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}  // Creates the hole (donut effect)
            outerRadius={120} // Controls the size of the chart
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          {/* Centered Text */}
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={24} fontWeight="bold">
            Hey
          </text>

          <Legend />
        </PieChart>
    </>
  );
};

export default DonutChart;