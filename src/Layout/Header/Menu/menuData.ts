import {
  FiHome,
  FiUsers,
  FiPhone,
  FiBookOpen,
  FiHeadphones,
} from "react-icons/fi";
import { type MenuItemType } from "./types";

export const MENU_ITEMS: MenuItemType[] = [
  {
    id: "home",
    label: "Home",
    icon: FiHome,
    path: "/",
    exact: true,
  },
  {
    id: "services",
    label: "Service Guide",
    icon: FiHeadphones,
    path: "/service-guide",
  },
  {
    id: "about",
    label: "About Us",
    icon: FiUsers,
    path: "/about",
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: FiPhone,
    path: "/contact",
  },
  {
    id: "terms",
    label: "T&C",
    icon: FiBookOpen,
    path: "/terms",
  },
];
