import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const StackedChart = () => {
  const data = [
    {
      name: "Sat",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sun",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mon",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Tue",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Wed",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Thu",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Fri",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip
          contentStyle={{ background: "transparent", border: "none" }}
          labelStyle={{ display: "none" }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedChart;
