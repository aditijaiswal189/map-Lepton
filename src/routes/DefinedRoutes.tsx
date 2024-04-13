import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layout/basic.layout";
import { PATH } from "../constants/path";
import Movies from "../pages/Movies";
import Login from "../features/login/Login";

import MyMap from "../features/map/Map";
import Airport from "../features/map/Airport";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <BasicLayout />,

    children: [
      {
        path: "",
        element: <p>I am index</p>,
      },
      {
        path: PATH.DASHBOARD,
        element: <p> Dashboard here</p>,
      },
      {
        path: PATH.MOVIES,
        element: <Movies />,
      },
      {
        path: PATH.MAP,
        element: <MyMap />,
      },
      {
        path: PATH.AIRPORT,
        element: <Airport />,
      },
      {
        path: "child",
        element: <p>child here</p>,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
]);
function DefinedRoutes() {
  return <RouterProvider router={router} />;
}

export default DefinedRoutes;
