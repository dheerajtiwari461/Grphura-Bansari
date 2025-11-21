import React from "react";
import "../../style/salesManager/totalSales.css";

const TotalSales = () => {
  const data = [
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Select",
      Services: "Select",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
  ];

  return (
    <div
      id="tsm-totalSales-wrapper"
      className="p-1 mt-5"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h3 className="tsm-title fw-bold mb-4 text-secondary">Total Sales</h3>

      {/* FILTER SECTION */}
      <div className="d-flex flex-column mb-5 mx-4">
        <div
          className="d-flex align-items-center justify-content-between mb-4"
          style={{ gap: "20px" }}
        >
          <div className="d-flex" style={{ gap: "20px", flex: "1" }}>
            <select className="form-select shadow-sm fw-bold tsm-select">
              <option>Month</option>
            </select>

            <select className="form-select shadow-sm fw-bold tsm-select">
              <option>Team Leader Name</option>
            </select>
          </div>

          <button className="btn btn-primary px-4 tsm-search-btn">
            Search
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="d-flex justify-content-center mx-4">
        <div
          className="tsm-table-container shadow-lg p-4 bg-white rounded"
        >
          <div className="tsm-table-wrapper">
            <table className="tsm-table" style={{ minWidth: "1200px" }}>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Client Name</th>
                  <th>Email_id</th>
                  <th>Contact no.</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>TL Name</th>
                  <th>Sales Executive</th>
                  <th>Services</th>
                  <th>Activity</th>
                </tr>
              </thead>

              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.companyName}</td>
                    <td>{row.clientName}</td>
                    <td>{row.email_id}</td>
                    <td>{row.contactNo}</td>
                    <td>{row.Date}</td>
                    <td>{row.Amount}</td>
                    <td>{row.TLname}</td>
                    <td>{row.SalesExecutive}</td>
                    <td>{row.Services}</td>

                    <td>
                      <button className="tsm-view-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
