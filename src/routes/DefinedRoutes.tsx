import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layout/basic.layout";
import { PATH } from "../constants/path";
import Movies from "../pages/Movies";

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
        element:<Movies/>,
      },

      {
        path: "child",
        element: <p>child here</p>,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <p>I am login here</p>,
  },
]);
function DefinedRoutes() {
  return <RouterProvider router={router} />;
}

export default DefinedRoutes;
