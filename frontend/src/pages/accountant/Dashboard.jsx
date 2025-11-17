import React, { useState } from "react";
import totalClients from "../../assets/accountant/Dashboard/totalClients.png";
import pendingClients from "../../assets/accountant/Dashboard/pendingClients.png";
import currentClients from "../../assets/accountant/Dashboard/currentClients.png";
import payout from "../../assets/accountant/Dashboard/payout.png";
import "../../style/salesExecutive/dashboard.css";
// import { Button } from "bootstrap";

const Dashboard = () => {
  const [showPopup, setShowpopup] = useState(false);

  const openPopup = () => setShowpopup(true);
  const closePopup = () => setShowpopup(false);

  return (
    <main>
      <div id="dashboard">
        <div id="dashboard-container">
          <section id="dashboard-data">
            <h1>Dashboard</h1>
            <div id="data-wrap">
              <div id="data">
                <h3>TOTAL CLIENTS</h3>
                <div id="num-vector">
                  <p>10</p>
                  <img src={totalClients} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>PENDING CLIENTS</h3>
                <div id="num-vector">
                  <p>1600</p>
                  <img src={pendingClients} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>CURRENT CLIENTS</h3>
                <div id="num-vector">
                  <p>8000</p>
                  <img src={currentClients} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>LAST MONTH PAYOUT</h3>
                <div id="num-vector">
                  <p>16</p>
                  <img src={payout} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="hot-clients">
            <div id="container">
              <div id="clients">
                <h1>Past Clients</h1>
                <div id="client-list">
                  <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                    <table>
                      <thead>
                        <th> </th>
                        <th>Company Name</th>
                        <th>Client Name</th>
                        <th>Email_id</th>
                        <th>Contact no.</th>
                        <th>Total Payment</th>
                        <th>Due Payment</th>
                        <th>Starting Date</th>
                        <th>End Date</th>
                        <th>More Details</th>
                      </thead>
                      <tr>
                        <td>1</td>
                        <td>Graphura India</td>
                        <td>Vivek Kumar</td>
                        <td>vivek@gmail.com</td>
                        <td>0123456789</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>10/10/25</td>
                        <td>10/12/25</td>
                        <td>
                          <button onClick={openPopup}>View</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Graphura India</td>
                        <td>Vivek Kumar</td>
                        <td>vivek@gmail.com</td>
                        <td>0123456789</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>10/10/25</td>
                        <td>10/12/25</td>
                        <td>
                          <button onClick={openPopup}>View</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Graphura India</td>
                        <td>Vivek Kumar</td>
                        <td>vivek@gmail.com</td>
                        <td>0123456789</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>10/10/25</td>
                        <td>10/12/25</td>
                        <td>
                          <button onClick={openPopup}>View</button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Graphura India</td>
                        <td>Vivek Kumar</td>
                        <td>vivek@gmail.com</td>
                        <td>0123456789</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>10/10/25</td>
                        <td>10/12/25</td>
                        <td>
                          <button onClick={openPopup}>View</button>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Graphura India</td>
                        <td>Vivek Kumar</td>
                        <td>vivek@gmail.com</td>
                        <td>0123456789</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>10/10/25</td>
                        <td>10/12/25</td>
                        <td>
                          <button onClick={openPopup}>View</button>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Graphura India</td>
                        <td>Vivek Kumar</td>
                        <td>vivek@gmail.com</td>
                        <td>0123456789</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>10/10/25</td>
                        <td>10/12/25</td>
                        <td>
                          <button onClick={openPopup}>View</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                  {showPopup && (
                    <div id="popup-overlay" onClick={closePopup}>
                      <div id="popup-box" onClick={(e) => e.stopPropagation()}>
                        <div id="popup-header">
                          <h3>Last Update</h3>
                          <button id="close-btn" onClick={closePopup}>
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
