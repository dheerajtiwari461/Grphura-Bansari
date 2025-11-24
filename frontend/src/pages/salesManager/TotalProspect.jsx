import React, { useState } from "react";
import "../../style/SalesTeamLead/SalesTeamLeadProspect.css";
import dot from "../../assets/salesTeamLead/dot.svg";

function TotalProspect() {
  const [member, setMember] = useState("");
  const [dateRange, setDateRange] = useState("");

  // modal form state
  const [updateModal, setUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [callOutcome, setCallOutcome] = useState("talk");
  const [comment, setComment] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", member, dateRange);
  };

  const data = [
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      emailId: "Bold text column",
      contactNo: "Bold text column",
      reminderDate: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      emailId: "Bold text column",
      contactNo: "Bold text column",
      reminderDate: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      emailId: "Bold text column",
      contactNo: "Bold text column",
      reminderDate: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      emailId: "Bold text column",
      contactNo: "Bold text column",
      reminderDate: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      emailId: "Bold text column",
      contactNo: "Bold text column",
      reminderDate: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      emailId: "Bold text column",
      contactNo: "Bold text column",
      reminderDate: "Bold text column",
    },
  ];

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Update submitted:", { callOutcome, comment });
    setUpdateModal(false);
    setComment("");
    setCallOutcome("talk");
  };

  return (
    <>
      <div className="leadprospectContainer">
        <h1>Total Prospect</h1>

        <div className="filter" role="region" aria-label="Search controls">
          <select
            id="memberSelect"
            className="selectControl"
            value={member}
            onChange={(e) => setMember(e.target.value)}
            aria-label="Member name"
          >
            <option value="">Member Name</option>
            <option value="member-1">Member 1</option>
            <option value="member-2">Member 2</option>
          </select>

          <select
            id="dateSelect"
            className="selectControl"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            aria-label="Select date range"
          >
            <option value="">Select Date</option>
            <option value="last-7">Last 7 days</option>
            <option value="last-30">Last 30 days</option>
          </select>

          <button type="button" className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="tableContainer">
          <table id="stl-table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th></th>
                <th>Company Name</th>
                <th>Client Name</th>
                <th>Email_id</th>
                <th>Contact no.</th>
                <th>Reminder date</th>
                <th>Activity</th>
                <th>Last Update</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={dot} alt="dot icon" />
                  </td>
                  <td>{item.companyName}</td>
                  <td>{item.clientName}</td>
                  <td>{item.emailId}</td>
                  <td>{item.contactNo}</td>
                  <td>{item.reminderDate}</td>
                  <td>
                    <button onClick={() => setUpdateModal(true)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => setViewModal(true)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Modal */}
      {updateModal && (
        <div id="popup-overlay" onClick={() => setUpdateModal(false)}>
          <div id="popup-box" onClick={(e) => e.stopPropagation()}>
            <div id="popup-header">
              <h3>Update Call Details</h3>
            </div>

            <div id="popup-content">
              <form onSubmit={handleUpdate}>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="talk"
                      checked={callOutcome === "talk"}
                      onChange={(e) => setCallOutcome(e.target.value)}
                    />{" "}
                    Talk
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="not-talk"
                      checked={callOutcome === "not-talk"}
                      onChange={(e) => setCallOutcome(e.target.value)}
                    />{" "}
                    Not Talk
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="delete"
                      checked={callOutcome === "delete"}
                      onChange={(e) => setCallOutcome(e.target.value)}
                    />{" "}
                    Delete Client’s Profile
                  </label>
                </div>

                <div className="comment-section">
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment..."
                  ></textarea>
                </div>

                <button id="update-btn" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && (
        <div id="popup-overlay" onClick={() => setViewModal(false)}>
          <div id="popup-box" onClick={(e) => e.stopPropagation()}>
            <div id="popup-header">
              <h3>Last Update</h3>
              <button id="close-btn" onClick={() => setViewModal(false)}>
                Close
              </button>
            </div>

            <div id="popup-content">
              <div className="update-row">
                <p className="date">25/06/2025 07:04 PM</p>
                <p className="desc">
                  I cannot directly generate HTML and CSS from an image of a
                  dashboard. My capabilities do not extend to converting visual
                  layouts into code.
                </p>
              </div>

              <div className="update-row">
                <p className="date">25/06/2025 07:04 PM</p>
                <p className="desc">
                  I cannot directly generate HTML and CSS from an image of a
                  dashboard. My capabilities do not extend to converting visual
                  layouts into code.
                </p>
              </div>
              <div className="update-row">
                <p className="date">25/06/2025 07:04 PM</p>
                <p className="desc">
                  I cannot directly generate HTML and CSS from an image of a
                  dashboard. My capabilities do not extend to converting visual
                  layouts into code.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TotalProspect;
