import React from "react";
import "./UserMsg.css";
function UserMsg({ userMsg }) {
  // console.log(userMsg)
  return (
    <div className="message-container user-message">
      <div className="message-content" id="userMessage-content">
        <p className="sender-name user-name">User</p>
        <p className="message-bubble user-bubble">{userMsg.Userquestion}</p>
      </div>
      <div
        className="avatar"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIlzQwm9M7IGNWH6VU-PG_nT9WmMVy39Swor9YKS_B8WukNgV4bUyJmByeiRB_1X3JZxCO_hfepyhKTszlubDCvCVBoMiNAj2wcFmyb6SRYhsKEzMJYsWCERZXj0Bv6-WjDbHSbX0zvKqWEPjeWC0ZCXFBVII9W4bK_sWbVTR1VwcFph9wOdiReRq4czJKXcQlM1jGsK2EoZfKxl1spe5C0B9rgyxIeVH-aU5yMjr8gpsIpqTObF3q_HMGQ5Nr2EiSdHnBE9Q1_Lpb")',
        }}
      ></div>
    </div>
  );
}

export default UserMsg;
