import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Transfer = lazy(() => import("../pages/transfer"));

const routes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/transfer",
    title: "Transfer",
    component: Transfer,
  },
];

export default routes;
