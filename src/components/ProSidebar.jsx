import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MapIcon from "@mui/icons-material/Map";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeIcon from "@mui/icons-material/Summarize";

const ProSidebar = () => {
  return (
    <div className="">
      <Sidebar
        // className="text-gray-500"
        rootStyles={{
          height: "92vh ",
        }}
      >
        <div>
          <h1 className="font-SourceSans text-gray-500 p-4">MAIN</h1>
        </div>
        <Menu
          className="font-poppins"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  // color: disabled ? '#f5d9ff' : '#d359ff',
                  fontWeight: active ? "bold" : undefined,
                };
            },
          }}
        >
          <SubMenu
            label="Charts"
            active
            icon={<BarChartIcon color="primary" />}
          >
            <MenuItem className="text-sm"> Pie charts </MenuItem>
            <MenuItem className="text-sm"> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label="Lists" icon={<ListAltIcon color="primary" />}>
            <MenuItem className="text-sm"> Users </MenuItem>
            <MenuItem className="text-sm"> Products </MenuItem>
            <MenuItem className="text-sm"> Orders </MenuItem>
            <MenuItem className="text-sm"> Posts </MenuItem>
          </SubMenu>
          <SubMenu label="Maps" icon={<MapIcon color="primary" />}>
            <MenuItem className="text-sm"> Google Maps </MenuItem>
            <MenuItem className="text-sm"> Open Street Maps </MenuItem>
          </SubMenu>
          <div>
            <h1 className="font-SourceSans text-gray-500 p-4">EXTRA</h1>
          </div>
          <MenuItem icon={<CalendarMonthIcon color="primary" />}>
            Calendar
          </MenuItem>
          <MenuItem icon={<SummarizeIcon color="primary" />}>
            {" "}
            Documentation{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProSidebar;
