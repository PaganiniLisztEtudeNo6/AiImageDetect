import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Detail = lazy(() => import("../pages/detail"));

const routes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/Detail",
    title: "Detail",
    component: Detail,
  },
];

export default routes;
