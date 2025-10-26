import { useState } from 'react'
import './App.css'
import ChatBot from "./Components/ChatBot";
function App() {
// const apiKey =" AIzaSyA2mJvVdVELvjsf-QhC1R-544FR9CgaJjM";
  return (
    <>
    <ChatBot />
    </>
  )
}

export default App
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TripApp from "./Components/TripApp";
// import ChatPage from "./Components/ChatPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<TripApp />} />
//         <Route path="/chat" element={<ChatPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;