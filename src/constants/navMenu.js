import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  SERVICES_ROUTE,
} from "./routes";

const navMenu = (t) => [
  {
    label: t("nav.home"),
    route: HOME_ROUTE,
  },
  {
    label: t("nav.about"),
    route: ABOUT_ROUTE,
  },
  {
    label: t("nav.products"),
    route: PRODUCTS_ROUTE,
  },
  {
    label: t("nav.services"),
    route: SERVICES_ROUTE,
  },
  {
    label: t("nav.contact"),
    route: CONTACT_ROUTE,
  },
];

export default navMenu;
