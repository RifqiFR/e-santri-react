import React from "react";
import { AiOutlineBell, AiOutlineHome, AiOutlineIdcard, AiOutlineShop } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { FaUserGraduate, FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { GrNotification, GrUserSettings } from "react-icons/gr";
import { BiCog, BiMoney } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";

export const GLOBAL_ICON_SIZE = 20;

export const SUPERADMIN_SIDEBAR_CONTENT = [
  {
    name: "Dashboard",
    path: "/super-admin/dashboard",
    icon: <AiOutlineHome size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Santri",
    path: "/super-admin/santri",
    icon: <FaUserGraduate size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Bendahara",
    path: "/super-admin/bendahara",
    icon: <FaMoneyBillWave size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Admin SMP",
    path: "/super-admin/admin-smp",
    icon: <GrUserSettings size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Admin SMA",
    path: "/super-admin/admin-sma",
    icon: <GrUserSettings size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Admin Merchant",
    path: "/super-admin/admin-merchant",
    icon: <GrUserSettings size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Notifikasi",
    path: "/super-admin/notifikasi",
    icon: <GrNotification size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Pengaturan",
    path: "/super-admin/pengaturan",
    icon: <BiCog size={GLOBAL_ICON_SIZE} />
  },
];

export const ADMIN_SIDEBAR_CONTENT = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <AiOutlineHome size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Santri",
    path: "/admin/santri",
    icon: <MdGroup size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Tagihan SPP",
    path: "/admin/spp",
    icon: <HiOutlineCash size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Kartu Santri",
    path: "/admin/kartusantri",
    icon: <AiOutlineIdcard size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Notifikasi",
    path: "/admin/notifikasi",
    icon: <GrNotification size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Pengaturan",
    path: "/admin/pengaturan",
    icon: <BiCog size={GLOBAL_ICON_SIZE} />
  },
];

export const BENDAHARA_SIDEBAR_CONTENT = [
  {
    name: "Dashboard",
    path: "/bendahara/dashboard",
    icon: <AiOutlineHome size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Pencairan Dana",
    path: "/bendahara/pencairan-dana",
    icon: <BiMoney size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Pengaturan",
    path: "/bendahara/pengaturan",
    icon: <BiCog size={GLOBAL_ICON_SIZE} />
  },
];

export const MERCHANT_SIDEBAR_CONTENT = [
  {
    name: "Dashboard",
    path: "/merchant/dashboard",
    icon: <AiOutlineHome size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Data Merchant",
    path: "/merchant/data-merchant",
    icon: <AiOutlineShop size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Notifikasi",
    path: "/merchant/notifikasi",
    icon: <AiOutlineBell size={GLOBAL_ICON_SIZE} />
  },
  {
    name: "Pengaturan",
    path: "/merchant/pengaturan",
    icon: <BiCog size={GLOBAL_ICON_SIZE} />
  },
];

export const SANTRI_SIDEBAR_CONTENT = [
  {
    name: "Ubah Pin",
    path: "/santri/ubah-pin",
    icon: <AiOutlineHome size={GLOBAL_ICON_SIZE} />
  },
];