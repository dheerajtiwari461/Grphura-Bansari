import React, { useState } from "react";
import logo from "../../assets/salesManager/sidebar/logo.png";
import profile from "../../assets/salesManager/sidebar/profile.png";
import dashboard from "../../assets/salesManager/sidebar/dashboard.png";
import totalSales from "../../assets/salesManager/sidebar/totalSales.png";
import totalprospect from "../../assets/salesManager/sidebar/totalProspect.png";
import report from "../../assets/salesManager/sidebar/report.png";
import managerReport from "../../assets/salesManager/sidebar/managerReport.png";
import teamMember from "../../assets/salesManager/sidebar/teamMember.png";
import transferData from "../../assets/salesManager/sidebar/transferData.png";
import transferDataFin from "../../assets/salesManager/sidebar/transferDataFin.png";
import untouchedData from "../../assets/salesManager/sidebar/untouchedData.png";
import prospectForm from "../../assets/salesManager/sidebar/prospectForm.png";
import salary from "../../assets/salesManager/sidebar/salary.png";
import "../salesManager/sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* === Hamburger Menu (Visible on small screens only) === */}

      {/* === Sidebar === */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div id="sidebar-container">
      <div id="menu-toggle" className={isOpen ? "open" : ""} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
          <div id="sidebar-header" style={{backgroundColor:"#3158c9"}}>
            <img src={logo} alt="Graphura Logo" id="logo-img" />
          </div>

          <div id="profile-section" style={{backgroundColor:"#3d68e7"}}>
            <img src={profile} alt="Profile Icon" id="profile-img" />
            <div id="profile-details">
              <h1 id="profile-name">Name</h1>
              <p id="profile-title">Sales Manager</p>
            </div>
          </div>

          <ul id="nav-menu" style={{backgroundColor:"#3d68e7"}}>
            <li className="nav-item">
              <img src={dashboard} alt="Dashboard Icon" id="nav-icon" />
              <NavLink to="/dashboard">Dashboard</NavLink>
              <hr className="nav-separator" />
            </li>

            <li className="nav-item">
              <img src={totalSales} alt="User Data Icon" id="nav-icon" />
              <NavLink to="/total-sales">Total Sales</NavLink>
              <hr className="nav-separator" />
            </li>

            <li className="nav-item">
              <img src={totalprospect} alt="Prospect Icon" id="nav-icon" />
              <NavLink to="/total-prospect">Total Prospect</NavLink>
              <hr className="nav-separator" />
            </li>

            <li className="nav-item">
              <img src={report} alt="Report Icon" id="nav-icon" />
              <NavLink to="/report">Report</NavLink>
              <hr className="nav-separator" />
            </li>

            <li className="nav-item">
              <img src={managerReport} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/manager-report">Manager Report</NavLink>
              <hr className="nav-separator" />
            </li>
            <li className="nav-item">
              <img src={teamMember} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/team-member">Team Member</NavLink>
              <hr className="nav-separator" />
            </li>
            <li className="nav-item">
              <img src={transferData} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/transfer-data">Transfer Data</NavLink>
              <hr className="nav-separator" />
            </li>
            <li className="nav-item">
              <img src={transferDataFin} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/transfer-data-fin">Transfer Data to Fin.</NavLink>
              <hr className="nav-separator" />
            </li>
            <li className="nav-item">
              <img src={untouchedData} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/untouched-data">Untouched data</NavLink>
              <hr className="nav-separator" />
            </li>
            <li className="nav-item">
              <img src={prospectForm} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/prospect-form">Prospect Form</NavLink>
              <hr className="nav-separator" />
            </li>
            <li className="nav-item">
              <img src={salary} alt="Sales Report Icon" id="nav-icon" />
              <NavLink to="/salary">Salary</NavLink>
              <hr className="nav-separator" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
