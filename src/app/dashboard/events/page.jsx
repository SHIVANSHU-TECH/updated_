import React from "react";
import Sidebar from "@/components/DashboardSidebar/Sidebar";
import Events from "@/components/DashboardEvents/events";
import css from "@/app/dashboard/dashboard.module.css";

const EventsPage = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <Events />
    </div>
  );
};

export default EventsPage;