import React, { useState } from "react";
import teamMember from "../../assets/salesTeamLead/Dashboard/teamMember.png";
import totalCall from "../../assets/salesTeamLead/Dashboard/totalCall.png";
import prospect from "../../assets/salesTeamLead/Dashboard/Prospect.png";
import clientData from "../../assets/salesTeamLead/Dashboard/clientData.png";
import "../../style/salesTeamLead/dashboard.css";
// import { Button } from "bootstrap";

const Dashboard = () => {
  const [showUpdatePopup, setShowUpdatepopup] = useState(false);
  const [showViewPopup, setShowViewpopup] = useState(false);

  const openUpdatePopup = () => setShowUpdatepopup(true);
  const openViewPopup = () => setShowViewpopup(true);
  const closeUpdatePopup = () => setShowUpdatepopup(false);
  const closeViewPopup = () => setShowViewpopup(false);

  return (
    <main>
      <div id="dashboard">
        <div id="dashboard-container">
          <section id="dashboard-data">
            <h1>Dashboard</h1>
            <div id="data-wrap">
              <div id="data">
                <h3>TEAM MEMBER</h3>
                <div id="num-vector">
                  <p>10</p>
                  <img src={teamMember} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>TOTAL CALL BY TEAM</h3>
                <div id="num-vector">
                  <p>1600</p>
                  <img src={totalCall} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>TOTAL PROSPECT</h3>
                <div id="num-vector">
                  <p>8000</p>
                  <img src={prospect} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>TOTAL CLIENT DATA</h3>
                <div id="num-vector">
                  <p>16</p>
                  <img src={clientData} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="hot-clients">
            <div id="container">
              <div id="clients">
                <h1>Total Call</h1>
                <div id="client-list">
                  <table>
                    <thead>
                      <th> </th>
                      <th>Company Name</th>
                      <th>Client Name</th>
                      <th>Email_id</th>
                      <th>Contact no.</th>
                      <th>Reminder Date</th>
                      <th>Activity</th>
                      <th>Last Update</th>
                    </thead>
                    <tr>
                      <td>1</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openUpdatePopup}>Update</button>
                      </td>
                      <td>
                        <button onClick={openViewPopup}>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openUpdatePopup}>Update</button>
                      </td>
                      <td>
                        <button onClick={openViewPopup}>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openUpdatePopup}>Update</button>
                      </td>
                      <td>
                        <button onClick={openViewPopup}>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openUpdatePopup}>Update</button>
                      </td>
                      <td>
                        <button onClick={openViewPopup}>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openUpdatePopup}>Update</button>
                      </td>
                      <td>
                        <button onClick={openViewPopup}>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openUpdatePopup}>Update</button>
                      </td>
                      <td>
                        <button onClick={openViewPopup}>View</button>
                      </td>
                    </tr>
                  </table>
                  {showViewPopup && (
                    <div id="popup-overlay" onClick={closeViewPopup}>
                      <div id="popup-box" onClick={(e) => e.stopPropagation()}>
                        <div id="popup-header">
                          <h3>Last Update</h3>
                          <button id="close-btn" onClick={closeViewPopup}>
                            Close
                          </button>
                        </div>

                        <div id="popup-content">
                          <div className="update-row">
                            <p className="date">25/06/2025 07:04 PM</p>
                            <p className="desc">
                              I cannot directly generate HTML and CSS from an
                              image of a dashboard. My capabilities do not
                              extend to converting visual layouts into code.
                            </p>
                          </div>

                          <div className="update-row">
                            <p className="date">25/06/2025 07:04 PM</p>
                            <p className="desc">
                              I cannot directly generate HTML and CSS from an
                              image of a dashboard. My capabilities do not
                              extend to converting visual layouts into code.
                            </p>
                          </div>

                          <div className="update-row">
                            <p className="date">25/06/2025 07:04 PM</p>
                            <p className="desc">
                              I cannot directly generate HTML and CSS from an
                              image of a dashboard. My capabilities do not
                              extend to converting visual layouts into code.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {showUpdatePopup && (
                    <div id="popup-overlay" onClick={closeUpdatePopup}>
                      <div id="popup-box" onClick={(e) => e.stopPropagation()}>
                        <div id="popup-header">
                          <h3>Update Call Details</h3>
                          <button id="close-btn" onClick={closeUpdatePopup}>
                            Close
                          </button>
                        </div>

                        <div id="popup-content">
                          <div className="radio-group">
                            <label>
                              <input type="radio" name="status" value="talk" />{" "}
                              Talk
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="status"
                                value="not-talk"
                              />{" "}
                              Not Talk
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="status"
                                value="delete"
                              />{" "}
                              Delete Client’s Profile
                            </label>
                          </div>

                          <div className="comment-section">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                              id="comment"
                              placeholder=""
                            ></textarea>
                          </div>

                          <button id="update-btn">Update</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
