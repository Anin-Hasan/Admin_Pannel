import React from "react";
import Avatar from "@mui/material/Avatar";
import GroupIcon from "@mui/icons-material/Group";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CategoryIcon from "@mui/icons-material/Category";
import SsidChartIcon from "@mui/icons-material/SsidChart";

import ResBar from "./Charts/ResBar";
import ChartBox from "./ChartBox";
import StackedChart from "./Charts/StackedChart";
import Pie_Chart from "./Charts/Pie_Chart";
import Calendar from "./Charts/Calendar";

const Charts = () => {
  return (
    <div>
      <div className=" grid grid-cols-4 gap-4 mx-2 ">
        <div>
          <div className=" px-4 pt-4 pb-6 my-2 w-full bg-slate-300 shadow-asthetic rounded-md">
            <div>
              <h1 className="text-3xl font-semibold font-SourceSans ">
                Top Deals
              </h1>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
              <div className="flex items-center justify-between mt-4 hover:scale-105  duration-300">
                <div className="flex">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
                    />
                  </div>
                  <div className=" mx-4 flex flex-col justify-center">
                    <h1 className="text-sm font-semibold font-SourceSans">
                      Remy Sharp
                    </h1>
                    <span className="text-sm">rs@gmail.com</span>
                  </div>
                </div>

                <h1 className="font-semibold font-SourceSans">$3.668</h1>
              </div>
            </div>
            {/* ============================== */}
          </div>
          <div className="text-center w-full h-80  shadow-asthetic rounded-md  ">
            <ResBar />
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-1">
            <ChartBox
              header={"Total Users"}
              icon={<GroupIcon color="primary" fontSize="large" />}
              number={"12.865"}
              percentage={"45%"}
            />
            <ChartBox
              icon={<InsertChartIcon color="primary" fontSize="large" />}
              header={"Revenue"}
              number={"$2164"}
              percentage={"32%"}
            />
            <ChartBox
              icon={<CategoryIcon color="primary" fontSize="large" />}
              header={"Products"}
              number={"$238"}
              percentage={"21%"}
            />
            <ChartBox
              header={"Ratio"}
              icon={<SsidChartIcon color="primary" fontSize="large" />}
              number={"2.6"}
              percentage={"12%"}
            />
          </div>
          <div className="h-80 shadow-asthetic rounded-md mt-2 p-4 pb-12">
            <h1 className="text-xl font-SourceSans font-semibold mb-4">
              Revenue Analytics
            </h1>
            <StackedChart />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-96 shadow-asthetic rounded-md mt-2 p-4 pb-12">
            <h1 className="text-xl font-SourceSans font-semibold mb-4">
              Leads by Source
            </h1>
            <Pie_Chart />
          </div>
          <div className="shadow-asthetic rounded-md mt-2 py-4 h-full flex items-center justify-center">
            <Calendar />
          </div>
        </div>
        {/* <div>04</div> */}
      </div>
    </div>
  );
};

export default Charts;
