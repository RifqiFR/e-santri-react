import PencairanDana from "pages/bendahara/PencairanDana";
import Dashboard from "pages/bendahara/Dashboard";

export const APP_BENDAHARA_ROUTE = [
  {
    name: "Dashboard",
    path: "/bendahara/dashboard",
    exact: true,
    component: Dashboard,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Data Riwayat Pencairan Dana",
    path: "/bendahara/pencairan-dana",
    exact: true,
    component: PencairanDana,
    // private: true,
    // isAdmin: true,
  },

];
