import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", green: 30, yellow: 70 },
  { name: "B", green: 50, yellow: 90 },
  { name: "C", green: 40, yellow: 100 },
  { name: "D", green: 60, yellow: 80 },
  { name: "E", green: 30, yellow: 70 },
];

const CustomChart = () => {
  return (
    <div className="absolute bottom-[-150px] right-[-170px] z-20  rounded-xl  w-[260px] justify-center items-center ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: "#999" }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="green" fill="#12B886" radius={[5, 5, 0, 0]} />
          <Bar dataKey="yellow" fill="#F6C23E" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomChart;
