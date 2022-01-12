import Dashboard from "pages/admin/Dashboard";
import Santri from "../pages/admin/Santri";
import SPP from "pages/admin/SPP";
import SantriDetail from "pages/admin/SantriDetail";
import SantriForm from "pages/admin/SantriForm";
import KartuSantri from "pages/admin/KartuSantri";
import KartuSantriCetak from "pages/admin/KartuSantriCetak";
import Pengaturan from "pages/admin/Pengaturan";
import Notifikasi from "pages/admin/Notifikasi";

export const APP_ADMIN_ROUTE = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    exact: true,
    component: Dashboard,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Santri",
    path: "/admin/santri",
    exact: true,
    component: Santri,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Santri",
    path: "/admin/santri/create",
    exact: true,
    component: SantriForm,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Santri",
    path: "/admin/santri/:id",
    exact: true,
    component: SantriDetail,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Tagihan SPP",
    path: "/admin/spp",
    exact: true,
    component: SPP,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Cetak Kartu Santri",
    path: "/admin/kartusantri",
    exact: true,
    component: KartuSantri,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Cetak Kartu Santri",
    path: "/admin/kartusantri/:id/cetak",
    exact: true,
    component: KartuSantriCetak,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Notifikasi",
    path: "/admin/notifikasi",
    exact: true,
    component: Notifikasi,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Pengaturan",
    path: "/admin/pengaturan",
    exact: true,
    component: Pengaturan,
    // private: true,
    // isAdmin: true,
  },

];
