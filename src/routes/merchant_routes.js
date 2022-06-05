import Pengaturan from "pages/merchant/Pengaturan";
import Dashboard from "pages/merchant/Dashboard";
import DataMerchant from "pages/merchant/DataMerchant";
import Notifikasi from "pages/merchant/Notifikasi";
import MerchantDetail from "pages/merchant/MerchantDetail";
import UbahSandi from "pages/merchant/UbahSandi";
import NotifikasiAksi from "pages/merchant/NotifikasiAksi";

export const APP_MERCHANT_ROUTE = [
  {
    name: "Dashboard",
    path: "/merchant/dashboard",
    exact: true,
    component: Dashboard,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Data Merchant",
    path: "/merchant/data-merchant",
    exact: true,
    component: DataMerchant,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Notifikasi",
    path: "/merchant/notifikasi",
    exact: true,
    component: Notifikasi,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Notifikasi",
    path: "/merchant/notifikasi/:id/:action", // WARN: be careful, the ID value should be NOTIFICATION ID not merchant ID, for mocking purpose, the ID is assumed merchant ID
    exact: true,
    component: NotifikasiAksi,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Pengaturan",
    path: "/merchant/pengaturan",
    exact: true,
    component: Pengaturan,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Ubah Sandi",
    path: "/merchant/pengaturan/sandi",
    exact: true,
    component: UbahSandi,
    // private: true,
    // isAdmin: true,
  },
  {
    name: "Merchant Detail",
    path: "/merchant/:id/detail",
    exact: true,
    component: MerchantDetail,
    // private: true,
    // isAdmin: true,
  },
];
