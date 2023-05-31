// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// //Components
// import BMS from "./components/Manager/BMS";
// import AllManagers from "./components/Manager/AllManagers.js";
// import AddManager from "./components/Manager/AddManager.js";
// import Navbar from "./components/Manager/Navbar.js";
// import EditManager from "./components/Manager/EditManager.js";
// import LoginPage from "./components/Admin/Login";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <LoginPage/>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<BMS />} />
//           <Route path="/add" element={<AddManager />} />
//           <Route path="/all" element={<AllManagers />} />
//           <Route path="/edit/:id" element={<EditManager />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

//Components
import BMS from "./components/Manager/BMS";
import AllManagers from "./components/Manager/AllManagers.js";
import AddManager from "./components/Manager/AddManager.js";
import Navbar from "./components/Manager/Navbar.js";
import EditManager from "./components/Manager/EditManager.js";
import LoginPage from "./components/Admin/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to handle successful login
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<BMS />} />
              <Route path="/add" element={<AddManager />} />
              <Route path="/all" element={<AllManagers />} />
              <Route path="/edit/:id" element={<EditManager />} />
            </Routes>
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;