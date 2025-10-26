import React from 'react'
import "./AiMsg.css"
function AiMsg({ aiMsg }) {
  // console.log(aiMsg);
  
  return (
    <div className="message-container ai-message" id='aiMessage-content'>
      <div
        className="avatar"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeaG3C2O8-bB_V-5tUrepeX_KEyzSkwB5rNgNCTiE3k0-gSpUrSZNe7ni63LwM9J6W0Rfx2Q53GB3NEJnz-ux7VPril-1qk4R-0j2F4-Wt_koiZJAF_sDrD35frEGTbTN1UzpsnYX6vw-wrQPlkmwRzMvdK3NBgkXzP6Ferz482STXtkrBDw17upYgpFdorPWD8n-cxnBSRbOF2h8I3FXkeMoPe59qGk8MUiG6F8yLiUIdSWEkvgmbwmsmbg0slknbc8qNy5hjh-oF")',
        }}
      ></div>
      <div className="message-content">
        <p className="sender-name">ChatBotAI</p>
        <p className="message-bubble ai-bubble">{aiMsg.AI_Answer}</p>
      </div>
    </div>
  );
}

export default AiMsg
