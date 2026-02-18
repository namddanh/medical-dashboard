import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
import PatientsPage from "../features/patients/PatientsPage";
import AppointmentsPage from "../features/appointments/AppointmentsPage";
import AuditPage from "../features/audit/AuditPage";

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
        element: <AppointmentsPage />,
      },
    ],
  },
  {
    path: "/audit",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <AuditPage />,
      },
    ],
  },
]);

export default routes;
