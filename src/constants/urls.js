import Cookies from "js-cookie";

export const SERVER_NAME = process.env.REACT_APP_BASE_URL_DEV;
const BASE_URL_USER_PONDOK = SERVER_NAME + "/api/user-pondok";
const BASE_URL_USER_CLIENT = SERVER_NAME + "/api/user-client";

let JWT = null;
if (Cookies.getJSON("USER") !== undefined) JWT = Cookies.getJSON("USER").token;

//INITIALIZE
export const JWT_HEADER = JWT;

//LOGIN & REGISTER API
export const LOGIN_API = `${BASE_URL_USER_PONDOK}/auth/login`;
export const REGISTER_API = `${BASE_URL_USER_PONDOK}/auth/register`;

export const GET_SELF = () => `${BASE_URL_USER_PONDOK}/user/current`;
export const CHANGE_PASSWORD = (userId) =>
  `${BASE_URL_USER_PONDOK}/user/change-password/${userId}`;
export const CHANGE_IMAGE = (userId) =>
  `${BASE_URL_USER_PONDOK}/user/change-image/${userId}`;
export const READ_IMAGE = (filename) =>
  `${BASE_URL_USER_PONDOK}/user/read-image/${filename}`;
export const EDIT_PROFILE = (userId) => `${BASE_URL_USER_PONDOK}/user/${userId}`;

// SUPER ADMIN API
export const GET_ADMIN_SANTRI = () =>
  `${BASE_URL_USER_PONDOK}/user/admin_santri`;
export const GET_ADMIN_MERCHANT = () =>
  `${BASE_URL_USER_PONDOK}/user/admin_merchant`;
export const GET_BENDAHARA = () =>
  `${BASE_URL_USER_PONDOK}/user/bendahara`;
export const GET_ADMIN_SANTRI_DETAIL = (id) =>
  `${BASE_URL_USER_PONDOK}/user/show/${id}`;
export const POST_NEW_ADMIN = () => `${BASE_URL_USER_PONDOK}/user`;
export const DELETE_NEW_ADMIN = (id) => `${BASE_URL_USER_PONDOK}/user/${id}`;

//ADMIN API