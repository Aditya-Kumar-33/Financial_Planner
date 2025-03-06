import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const DonutChart = ({ principal, returns, total }) => {
  const roundedTotal = total.toFixed(2);
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
        innerRadius={90} // Creates the hole (donut effect)
        outerRadius={120} // Controls the size of the chart
        fill="#8884d8"
        label={({ value, cx, cy, midAngle, outerRadius }) => {
          const RADIAN = Math.PI / 180;
          const x = cx + (outerRadius + 50) * Math.cos(-midAngle * RADIAN);
          const y = cy + (outerRadius + 50) * Math.sin(-midAngle * RADIAN);
          return (
            <text x={x} y={y} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#ffffff">
              ₹{value.toFixed(2)}
            </text>
          );
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
        ))}
      </Pie>

      {/* Centered Text */}
      <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" fontSize={14} fontWeight="bold" fill="#ffffff">
        In total:
      </text>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={20} fontWeight="bold" fill="#ffffff">
        ₹{roundedTotal}
      </text>

      <Legend wrapperStyle={{ fontWeight: "bold" }} />
    </PieChart>
  );
};

export default DonutChart;
