import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../../App";
import { About, Bases, Equipment, Home, NotFound, Service, SpecialProjects, Thermos } from "../pages";


export const GetAppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes it the default route when path is "/"
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },
      {
        path: "/equipment/:id",
        element: <Equipment />,
      },
      {
        path: "/thermo/:id",
        element: <Thermos />,
      },
      {
        path: "/special-projects/:id",
        element: <SpecialProjects />,
      },
      {
        path: "/bases/:id",
        element: <Bases />,
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
