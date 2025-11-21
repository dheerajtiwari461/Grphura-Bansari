import React from "react";
import "../../style/salesExecutive/salesReport.css"

const SalesReport = () => {
  const data = [
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Select",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
  ];

  return (
    <div id="sales-report-container" style={{ backgroundColor: "#fff" }}>
      {/* Heading */}
      <h3 id="sales-report-heading">Sales Report</h3>

      {/* Table container */}
      <div id="sales-report-wrapper">
        <div id="sales-report-table-container">
          <table id="sales-report-table" style={{width:"100%"}}>
            <thead id="sales-report-thead">
              <tr id="sales-report-header-row">
                <th id="th-company">Company Name</th>
                <th id="th-client">Client Name</th>
                <th id="th-email">Email_id</th>
                <th id="th-contact">Contact no.</th>
                <th id="th-services">Services</th>
                <th id="th-date">Date</th>
              </tr>
            </thead>
            <tbody id="sales-report-tbody">
              {data.map((row, index) => (
                <tr id={`sales-report-row-${index}`} key={index}>
                  <td id={`td-company-${index}`}>{row.companyName}</td>
                  <td id={`td-client-${index}`}>{row.clientName}</td>
                  <td id={`td-email-${index}`}>{row.email}</td>
                  <td id={`td-contact-${index}`}>{row.contact}</td>
                  <td id={`td-services-${index}`}>{row.services}</td>
                  <td id={`td-date-${index}`}>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
