import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";

import LoginPage from "../features/login/LoginPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import PatientsPage from "../features/patients/PatientsPage";
import AppointmentsPage from "../features/appointments/AppointmentsPage";
import AuditPage from "../features/audit/AuditPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/patients", element: <PatientsPage /> },
      { path: "/appointments", element: <AppointmentsPage /> },
      { path: "/audit", element: <AuditPage /> },
    ],
  },
]);

export default router;
