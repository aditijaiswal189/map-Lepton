import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layout/basic.layout";
import { PATH } from "../constants/path";

import MyMap from "../features/map/Map";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <BasicLayout />,

    children: [
      {
        path: "",
        element: <MyMap />,
      },
    ],
  },
]);
function DefinedRoutes() {
  return <RouterProvider router={router} />;
}

export default DefinedRoutes;
