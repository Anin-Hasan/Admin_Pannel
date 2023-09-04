import React from "react";

import Line_Chart from "./Charts/Line_Chart";

const ChartBox = ({ header, number, icon, percentage }) => {
  return (
    <div className="flex shadow-asthetic p-4 rounded-md mt-2 h-64">
      <div className="w-full flex flex-col space-y-11 ">
        <div>
          <div className="flex items-center gap-2 ">
            <div>{icon}</div>
            <h1 className="text-xl font-SourceSans font-semibold">{header}</h1>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-gray-600 font-poppins">
          {number}
        </h1>
        <a
          href="#"
          className="text-violet-400 font-semibold font-poppins hover:text-violet-500"
        >
          View All
        </a>
      </div>
      <div>
        <div className="h-32  w-48">
          <Line_Chart />
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-green-600 font-bold font-poppins text-2xl">
            {percentage}
          </h1>
          <h1 className="font-semibold font-poppins text-md text-gray-500">
            This Month
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
