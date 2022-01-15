import Dashboard from "pages/super-admin/Dashboard";
import Santri from "../pages/super-admin/Santri";
import Admin from "../pages/super-admin/Admin";
import AdminForm from "../pages/super-admin/AdminForm";
import AdminDetail from "../pages/super-admin/AdminDetail";
import SantriDetail from "pages/super-admin/SantriDetail";
import SantriForm from "pages/super-admin/SantriForm";
import Pengaturan from "pages/super-admin/Pengaturan";
import Notifikasi from "pages/super-admin/Notifikasi";
import Bendahara from "../pages/super-admin/Bendahara";
import BendaharaDetail from "../pages/super-admin/BendaharaDetail";
import BendaharaForm from "../pages/super-admin/BendaharaForm";

export const APP_SUPER_ADMIN_ROUTE = [
  {
    name: "Dashboard",
    path: "/super-admin/dashboard",
    exact: true,
    component: Dashboard,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Santri",
    path: "/super-admin/santri",
    exact: true,
    component: Santri,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Santri",
    path: "/super-admin/santri/create",
    exact: true,
    component: SantriForm,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Santri",
    path: "/super-admin/santri/:id",
    exact: true,
    component: SantriDetail,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin SMP",
    path: "/super-admin/admin-smp",
    exact: true,
    component: Admin,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin SMP",
    path: "/super-admin/admin-smp/create",
    exact: true,
    component: AdminForm,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin SMP",
    path: "/super-admin/admin-smp/:id",
    exact: true,
    component: AdminDetail,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin SMA",
    path: "/super-admin/admin-sma",
    exact: true,
    component: Admin,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin SMA",
    path: "/super-admin/admin-sma/create",
    exact: true,
    component: AdminForm,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin SMA",
    path: "/super-admin/admin-sma/:id",
    exact: true,
    component: AdminDetail,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin Merchant",
    path: "/super-admin/admin-merchant",
    exact: true,
    component: Admin,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin Merchant",
    path: "/super-admin/admin-merchant/create",
    exact: true,
    component: AdminForm,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Admin Merchant",
    path: "/super-admin/admin-merchant/:id",
    exact: true,
    component: AdminDetail,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Bendahara",
    path: "/super-admin/bendahara",
    exact: true,
    component: Bendahara,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Tambah Bendahara",
    path: "/super-admin/bendahara/create",
    exact: true,
    component: BendaharaForm,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Detail Bendahara",
    path: "/super-admin/bendahara/:id",
    exact: true,
    component: BendaharaDetail,
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
