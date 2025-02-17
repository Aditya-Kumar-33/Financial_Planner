import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const DonutChart = ({ principal, returns, total }) => {
  const data = [
    { name: "Principal", value: principal, color: "#007bff" }, // Blue
    { name: "Returns", value: returns, color: "#ffc107" }, // Yellow
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={75} // Creates the hole (donut effect)
        outerRadius={120} // Controls the size of the chart
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>

      {/* Centered Text */}
      <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" fontSize={16} fontWeight="bold">
        In total:
      </text>
      <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize={24} fontWeight="bold">
        ₹{total}
      </text>

      <Legend
        wrapperStyle={{ fontWeight: "bold" }} // Bold legend text
      />
    </PieChart>
  );
};

export default DonutChart;
