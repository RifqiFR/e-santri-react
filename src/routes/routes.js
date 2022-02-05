/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
       restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
        
  - Home untuk pasien yang sudah login
  - Dashboard untuk admin & superadmin yang sudah login
*/
import AdminContainer from "components/admin/AdminContainer";
import Home from "pages/Home";
import Login from "pages/Login";
import SuperAdminContainer from "../components/super-admin/SuperAdminContainer";
import ErrorPage from "../pages/404Pages/ErrorPage";
import BendaharaContainer from "../components/bendahara/BendaharaContainer";

export const APP_ROUTE = [
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
    isGuest: true,
  },
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
    restricted: true,
  },
  {
    name: "Admin Dashboard",
    path: "/admin",
    // exact: true, //di false karena ada nested Switch di dalamnya AdminCOntainer
    component: AdminContainer,
    private: false,
    isAdmin: true,
  },
  {
    name: "Super Admin Dashboard",
    path: "/super-admin",
    // exact: true, //di false karena ada nested Switch di dalamnya AdminCOntainer
    component: SuperAdminContainer,
    private: false,
    isAdmin: true,
  },
  {
    name: "Bendahara Dashboard",
    path: "/bendahara",
    // exact: true, //di false karena ada nested Switch di dalamnya AdminCOntainer
    component: BendaharaContainer,
    private: false,
    isAdmin: true,
  },
  {
    name: "Error Page not found",
    path: "/*",
    component: ErrorPage,
    private: true,
    exact: true,
    isNotFound: true,
  },
  {
    name: "Error Page not found",
    path: "/error",
    component: ErrorPage,
    private: true,
    exact: true,
    isNotFound: true,
  }
];

// export const APP_ROUTE = [
//   {
//     name: 'Home',
//     path: '/',
//     pageComponent: Home,
//     exact: true,
//   },
//   {
//     name: 'Login',
//     path: '/login',
//     pageComponent: Login,
//     middleware: {
//       middleware: () => !isLogin(),
//       redirectPath: ''
//     },
//     exact: true,
//   },
//   {
//     name: "Admin Dashboard",
//     path: "/admin",
//     pageComponent: AdminContainer,
//     middleware: {
//       middleware: isAdminSantri,
//       redirectPath: '/login'
//     },
//   },
//   {
//     name: "Super Admin Dashboard",
//     path: "/super-admin",
//     pageComponent: SuperAdminContainer,
//     middleware: {
//       middleware: isSuperAdmin,
//       redirectPath: '/login'
//     },
//   },
//   {
//     name: "Bendahara Dashboard",
//     path: "/bendahara",
//     pageComponent: BendaharaContainer,
//     middleware: {
//       middleware: isBendahara,
//       redirectPath: '/login'
//     },
//   },
//   {
//     name: "Error Page not found",
//     path: "/error",
//     pageComponent: ErrorPage,
//     exact: true,
//   },
//   {
//     name: "Error Page not found",
//     path: "/*",
//     pageComponent: ErrorPage,
//   },
// ];