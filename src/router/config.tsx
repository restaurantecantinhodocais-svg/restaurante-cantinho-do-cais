import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Precario from "../pages/precario";
import Privacidade from "../pages/legal/Privacidade";
import Termos from "../pages/legal/Termos";
import Cookies from "../pages/legal/Cookies";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/precario",
    element: <Precario />,
  },
  {
    path: "/privacidade",
    element: <Privacidade />,
  },
  {
    path: "/termos",
    element: <Termos />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;