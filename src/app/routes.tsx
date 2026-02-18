import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
import PatientsPage from "../features/patients/PatientsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/patients",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <PatientsPage />,
      },
    ],
  },
  {
    path: "/appointments",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <PatientsPage />,
      },
    ],
  },
  {
    path: "/audit",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <PatientsPage />,
      },
    ],
  },
]);

export default routes;
