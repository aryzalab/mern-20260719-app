import { FaBagShopping, FaBasketShopping, FaCube } from "react-icons/fa6";
import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "./routes";
import {
  FaChartPie,
  FaShoppingBasket,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

const adminMenu = [
  {
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
    Icon: FaChartPie,
    isAdminOnly: false,
  },
  {
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
    Icon: FaBagShopping,
    isAdminOnly: false,
  },
  {
    label: "Order Management",
    route: ORDER_MANAGEMENT_ROUTE,
    Icon: FaShoppingCart,
    isAdminOnly: false,
  },
  {
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
    Icon: FaUsers,
    isAdminOnly: true,
  },
];

export default adminMenu;
