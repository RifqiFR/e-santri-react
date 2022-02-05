/*
  Ini utils auth, tujuannya buat ngecek di localstorage ada item "USER" apa nggak. Btw nanti
  kalo misal nyimpen token atau yg sensitif2 gitu pake cookies aja lho ya. Kalo sekedar data
  kayak nama user di localStorage aja gpp
*/
// import sessionstorage from 'sessionstorage';
import Cookies from "js-cookie";

export const saveToken = (user) => {
  Cookies.set("USER", user);
};
export const login = (user) => {
  Cookies.set("USER", user);
};

export const removeToken = () => {
  Cookies.remove("USER");
};

export const isLogin = () => {
  const loginData = parseLoginToken();

  if (loginData) {
    const exp = loginData.exp;
    
    return (+exp * 1000) > Date.now();
  } else {
    return false;
  }
};

export const isPasien = () => {
  if (Cookies.getJSON("USER")?.role === "Pasien") {
    return true;
  }
  return false;
};

export const parseLoginToken = () => {
  const token = Cookies.get("USER");

  if (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  } else {
    return null;
  }
};

export const isLoginExpired = () => {

}