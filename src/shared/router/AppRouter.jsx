import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import { About, Home, NotFound, Service } from "../pages";

export const GetAppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
    errorElement: <NotFound />,
  },
]);

export default function AppRouter() {
  return (
    <>
      <RouterProvider router={GetAppRoutes} />
    </>
  );
}
