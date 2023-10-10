import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./dashboardSidebar.css";
import profile from "../../../public/profile.jpg";
const Sidebar = () => {
  const options = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Events", link: "/dashboard/events" },
    { name: "Internships", link: "/dashboard/internships" },
  ];
  return (
    <div className="sidebar-container">
      <div className="image">
        <Image src={profile} alt="ashja" />
      </div>
      <div className="h2">
        <strong>Welcome, User!</strong>
      </div>

      <ul className="menu">
        {options.map(({ name, link }) => {
          return (
            <li key={name} className="menu-option">
              <Link href={link} className="menu-link">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      <button className="menu-link">Log out</button>
    </div>
  );
};

export default Sidebar;
