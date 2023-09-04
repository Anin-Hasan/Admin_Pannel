import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import CropFreeIcon from "@mui/icons-material/CropFree";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { TextField } from "@mui/material";

const Navbar = () => {
  return (
    <div className="shadow-asthetic">
      <div className="flex justify-between items-center bg-gray-700 h-20 px-40">
        <div className="flex gap-3 cursor-pointer">
          <AdminPanelSettingsIcon className="text-sky-400" />
          <h1 className="font-SourceSans text-white font-bold text-xl">
            Admin Pannel
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <TextField
            size="small"
            className=""
            id="standard-basic"
            label="Search"
            variant="outlined"
          />
          <SearchIcon className="text-white cursor-pointer hover:text-sky-600 duration-300" />
          <GridViewIcon className="text-white cursor-pointer hover:text-sky-600 duration-300" />
          <CropFreeIcon className="text-white cursor-pointer hover:text-sky-600 duration-300" />
          <NotificationsIcon className="text-white cursor-pointer hover:text-sky-600 duration-300" />
          <div className="flex text-white font-SourceSans font-semibold gap-2 mx-2 cursor-pointer">
            <img
              className="h-6 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3lfb4Bj1Ojyz4HQYu_J2KcOw3dNDIPVhOg&usqp=CAU"
            />
            <h1>Alex</h1>
          </div>
          <SettingsIcon className="text-white cursor-pointer hover:text-sky-600 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
