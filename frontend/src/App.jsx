import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { roleBasedRoutes } from "./routes";

// Import all role-based headers and sidebars
import SalesExecutiveHeader from "./components/salesExecutive/Header";
import SalesExecutiveSidebar from "./components/salesExecutive/Sidebar";

import SalesTeamLeadHeader from "./components/salesTeamLead/Header";
import SalesTeamLeadSidebar from "./components/salesTeamLead/Sidebar";

import SalesManagerSidebar from "./components/salesManager/Sidebar";
import SalesManagerHeader from "./components/salesManager/Header";

import ManagementTLSidebar from "./components/managementTL/sidebar";
import ManagementTLHeader from "./components/managementTL/header";

import ManagementEmployeeSideber from "./components/managementEmployee/Sidebar";
import ManagementEmployeeHeader from "./components/managementEmployee/Header";

import ManagerManagementSidebar from "./components/managerManagement/Sidebar";
import ManagerManagementHeader from "./components/managerManagement/Header";

import FeedbackManagerSidebar from "./components/feedbackmanager/Sidebar";
import FeedbackManagerHeader from "./components/feedbackmanager/Header";

import FeedbackEmployeeSidebar from "./components/feedbackEmployee/Sidebar";
import FeedbackEmployeeHeader from "./components/feedbackEmployee/Header";

import FinanceSidebar from "./components/finance/Sidebar";
import FinanceHeader from "./components/finance/Header";

import AccountantSidebar from "./components/accountant/Sidebar";
import AccountantHeader from "./components/accountant/Header";

function App() {
  const role = localStorage.getItem("role") || "accountant"; // Example fallback
  const currentRoutes = roleBasedRoutes[role] || [];

  // Choose header and sidebar dynamically
  const renderLayout = () => {
    switch (role) {
      case "salesExecutive":
        return (
          <>
            <SalesExecutiveSidebar />
            <div>
              <SalesExecutiveHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "salesTeamLead":
        return (
          <>
            <SalesTeamLeadSidebar />
            <div>
              <SalesTeamLeadHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );
      case "salesManager":
        return (
          <>
            <SalesManagerSidebar />
            <div>
              <SalesManagerHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "managementTL":
        return (
          <>
            <ManagementTLSidebar />
            <div>
              <ManagementTLHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "managementEmployee":
        return (
          <>
            <ManagementEmployeeSideber />
            <div>
              <ManagementEmployeeHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "managerManagement":
        return (
          <>
            <ManagerManagementSidebar />
            <div>
              <ManagerManagementHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "feedbackManager":
        return (
          <>
            <FeedbackManagerSidebar />
            <div>
              <FeedbackManagerHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "feedbackEmployee":
        return (
          <>
            <FeedbackEmployeeSidebar />
            <div>
              <FeedbackEmployeeHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "finance":
        return (
          <>
            <FinanceSidebar />
            <div>
              <FinanceHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );
      case "accountant":
        return (
          <>
            <AccountantSidebar />
            <div>
              <AccountantHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      default:
        return <div>Role not found</div>;
    }
  };

  return <Router>{renderLayout()}</Router>;
}

export default App;
