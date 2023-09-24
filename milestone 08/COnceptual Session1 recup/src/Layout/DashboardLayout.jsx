import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="p-5 flex px-5">
      <div className="my-20 flex flex-col shadow-lg p-5 space-y-3 w-1/4">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/profile">Profile</NavLink>
        <NavLink to="/dashboard/editprofile">Edit Profile</NavLink>
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
