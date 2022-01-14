/*
  Ini utils auth, tujuannya buat ngecek di localstorage ada item "USER" apa nggak. Btw nanti
  kalo misal nyimpen token atau yg sensitif2 gitu pake cookies aja lho ya. Kalo sekedar data
  kayak nama user di localStorage aja gpp
*/
// import sessionstorage from 'sessionstorage';
import Cookies from "js-cookie";

export const setUserLogin = (user) => {
  Cookies.set("USER", user);
};
export const login = (user) => {
  Cookies.set("USER", user);
};

export const logout = () => {
  Cookies.remove("USER");
};

export const isLogin = () => {
  if (Cookies.get("USER")) {
    return true;
  }
  return false;
};

export const isSantri = () => {
  if (Cookies.getJSON("USER")?.role === "santri") {
    return true;
  }
  return false;
};
export const isAdminSantri = () => {
  if (Cookies.getJSON("USER")?.role === "admin_santri") {
    return true;
  }
  return false;
};
export const isAdminMerchant = () => {
  if (Cookies.getJSON("USER")?.role === "admin_merchant") {
    return true;
  }
  return false;
};
export const isBendahara = () => {
  if (Cookies.getJSON("USER")?.role === "bendahara") {
    return true;
  }
  return false;
};
export const isSuperAdmin = () => {
  if (Cookies.getJSON("USER")?.role === "super_admin") {
    return true;
  }
  return false;
};
