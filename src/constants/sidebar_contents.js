import React from "react";
import { AiOutlineHome, AiOutlineIdcard } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { HiOutlineCash } from "react-icons/hi";
import { GrNotification } from "react-icons/gr";
import { BiCog } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";

export const GLOBAL_ICON_SIZE = 20;

export const SUPERADMIN_SIDEBAR_CONTENT = [];

export const ADMIN_SIDEBAR_CONTENT = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <AiOutlineHome size={GLOBAL_ICON_SIZE}/>
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