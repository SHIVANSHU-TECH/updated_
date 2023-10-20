<<<<<<< HEAD
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
=======
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
>>>>>>> a1905e9f3a707821294f714ce4230c42b4e80b97
