import React from "react";
import Sidebar from "@/components/DashboardSidebar/Sidebar";
import Internships from "@/components/DashboardInternships/Internships";
import css from "@/app/dashboard/dashboard.module.css";

const InternshipsPage = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <Internships />
    </div>
  );
};

export default InternshipsPage;