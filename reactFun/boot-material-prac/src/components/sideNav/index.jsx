import React from "react";
import "./styles.css";
import { DashboardIcon } from "../../assets";
import { Section1 } from "./section1";

let menuData = [
  {
    title: "ANALTYTICS",
    option: [
      { id: 0, label: "Dashboard", icon: DashboardIcon, notif: 0, action: () => {} },
      { id: 1, label: "Performance", icon: DashboardIcon, notif: 0, action: () => {} },
      { id: 2, label: "Dashboard", icon: DashboardIcon, notif: 0, action: () => {} },
    ],
  },
  {
    title: "CONTENT",
    option: [
      { id: 3, label: "Dashboard", icon: DashboardIcon, notif: 0, action: () => {} },
      { id: 4, label: "Checklist", icon: DashboardIcon, notif: 0, action: () => {} },
      { id: 5, label: "NPS", icon: DashboardIcon, notif: 23, action: () => {} },
    ],
  },
  {
    title: "CUSTOMIZATION",
    option: [
      { id: 6, label: "Segments", icon: DashboardIcon, notif: 2, action: () => {} },
      { id: 7, label: "Theme", icon: DashboardIcon, notif: 0, action: () => {} },
    ],
  },
];

export default function SideNav(props) {
  return (
    <div className="sideNav-main-cont">
      {menuData.map((item) => (
        <Section1 data={item} />
      ))}
    </div>
  );
}
