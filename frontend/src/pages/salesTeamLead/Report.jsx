import React from "react";
import clientData from "../../assets/salesTeamLead/Report/clientData.png";
import todaycalls from "../../assets/salesTeamLead/Report/Todaycalls.png";
import transferdata from "../../assets/salesTeamLead/Report/Transferdata.png";
import totalSales from "../../assets/salesTeamLead/Report/totalSales.png";
// import "../../style/salesExecutive/dashboard.css";
import "../../style/salesTeamLead/report.css";

function Report() {
  const data = [
    ...Array(6).fill({
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      reminder: "Bold text column",
      activity: "Update",
    }),
  ];

  return (
    <div>
      <div id="report-container">
        <section id="report-data">
          <h1>TL Report</h1>
          <div id="data-wrap">
            <div id="data">
              <h3>TOTAL DATA</h3>
              <div id="num-vector">
                <p>10</p>
                <img src={clientData} alt="" />
              </div>
            </div>
            <div id="data">
              <h3>TODAY CALLS</h3>
              <div id="num-vector">
                <p>1600</p>
                <img src={todaycalls} alt="" />
              </div>
            </div>
            <div id="data">
              <h3>TODAY SALES</h3>
              <div id="num-vector">
                <p>8000</p>
                <img src={totalSales} alt="" />
              </div>
            </div>
            <div id="data">
              <h3>TODAY TRANSFER DATA</h3>
              <div id="num-vector">
                <p>6</p>
                <img src={transferdata} alt="" />
              </div>
            </div>
          </div>
        </section>

        <h1 className="table-head">
          Today Call Logs
        </h1>
        <div className="table-container">
          <div className="client-report">
            <table className="custom-table">
              <thead>
                <tr>
                  <th />
                  <th>Company Name</th>
                  <th>Client Name</th>
                  <th>Email_id</th>
                  <th>Contact no.</th>
                  <th>Reminder date</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className="drag-dots">⋮</span>
                    </td>
                    <td className="bold">{row.companyName}</td>
                    <td className="bold">{row.clientName}</td>
                    <td className="bold">{row.email}</td>
                    <td className="bold">{row.contact}</td>
                    <td className="bold">{row.reminder}</td>

                    <td>
                      <button className="report-btn">{row.activity}</button>
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
}

export default Report;
