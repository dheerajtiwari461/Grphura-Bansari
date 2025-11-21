import React from "react";
import "../../style/salesTeamLead/TransferData.css";

const SalesReport = () => {
  const data = [
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
  ];

  return (
    <div
      id="transferData-container"
      className="p-4"
      style={{ backgroundColor: "#fff" }}
    >
      <h3 style={{fontWeight:"700"}} className="mb-4 text-secondary">Transfer Data</h3>

      <div className="d-flex flex-column mb-5 mx-4">
        <div
          className="d-flex flex-column mb-5 mx-4"
          style={{ maxWidth: "950px" }}
        >
          <div
            className="d-flex justify-content-between mb-3"
            style={{ gap: "20px" }}
          >
            <select
              className="form-select shadow-sm fw-bold"
              style={{ width: "100%", maxWidth: "450px", height: "50px" }}
            >
              <option>Member Name</option>
              <option>Harry</option>
              <option>Alex</option>
              <option>Smith</option>
            </select>

            <select
              className="form-select shadow-sm fw-bold"
              style={{ width: "100%", maxWidth: "450px", height: "50px" }}
            >
              <option>Transfer Data in No.</option>
              <option>21</option>
              <option>45</option>
              <option>32</option>
            </select>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary px-5 py-2"
              style={{
                backgroundColor: "#4972e8",
                fontWeight: "600",
                width: "fit-content",
              }}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>

      <h3 style={{fontWeight:"700"}} className="mb-4 text-secondary">Transfer Data History</h3>

      <div className="d-flex justify-content-center">
        <div
          className="table-responsive shadow-lg p-2 bg-white rounded"
          style={{
            width: "100%",
            padding: "0px 20px 0px 80px",
          }}
        >
          <table className="custom-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Transfer Data in No.</th>
                <th>Date</th>
                <th>Transfer By</th>
                <th>Total Data in account</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.employeeName}</td>
                  <td>{row.TransferData}</td>
                  <td>{row.date}</td>
                  <td>{row.Transferby}</td>
                  <td>{row.TotalData}</td>
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
