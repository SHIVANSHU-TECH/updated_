import Sidebar from "@/components/DashboardSidebar/Sidebar";
import Recent from "@/components/DashboardRecent/Recent";

import React from "react";
import css from "@/app/dashboard/dashboard.module.css";

const page = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <Recent/>
    </div>
  );
};

export default page;
