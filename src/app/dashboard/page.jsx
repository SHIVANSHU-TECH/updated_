import Sidebar from "@/components/DashboardSidebar/Sidebar";
import Recent from "@/components/DashboardRecent/Recent";

import React from "react";
import css from "@/app/dashboard/dashboard.module.css";
import Recent from "@/components/DashboardRecent/Recent";
import Transactions from "@/components/DashboardTransactions/Transactions";

const page = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
<<<<<<< HEAD
      <div className={css.rightSideRecents}>
      <div className={css.recents}>
        <Recent heading="Events" data={8} />
        <Recent heading="Internships" data={10} />
      </div>
      <div className={css.recentTables}>
        <Transactions />
      </div>
      </div>
=======
      <Recent/>
>>>>>>> a1905e9f3a707821294f714ce4230c42b4e80b97
    </div>
  );
};

export default page;
