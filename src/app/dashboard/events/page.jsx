<<<<<<< HEAD
import Sidebar from '@/components/DashboardSidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='events-container'>
        
        
    </div>
  )
}

export default page
=======
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
>>>>>>> a1905e9f3a707821294f714ce4230c42b4e80b97
