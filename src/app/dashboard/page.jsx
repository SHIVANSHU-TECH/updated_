import Sidebar from "@/components/DashboardSidebar/Sidebar";
import React from "react";
import css from "@/app/dashboard/dashboard.module.css";

const page = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
    </div>
  );
};

export default page;
