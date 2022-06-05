import PencairanDana from "pages/bendahara/PencairanDana";
import Dashboard from "pages/bendahara/Dashboard";
import PencairanDanaDetail from "pages/bendahara/PencairanDanaDetail";

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
  {
    name: "Data Merchant",
    path: "/bendahara/pencairan-dana/:id/:action",
    exact: false,
    component: PencairanDanaDetail,
    // private: true,
    // isAdmin: true,
  },

];
