import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Components
import BMS from "./components/Manager/BMS";
import AllManagers from "./components/Manager/AllManagers.js";
import AddManager from "./components/Manager/AddManager.js";
import Navbar from "./components/Manager/Navbar.js";
import EditManager from "./components/Manager/EditManager.js";
import ManagerSearch from "./components/Manager/ManagerSearch.js";
import LoginPage from "./components/Admin/Login";
import Footer from "./components/Manager/FooterContainer";

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
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
              <Route path="/" element={<BMS />} />
              <Route path="/add" element={<AddManager />} />
              <Route path="/all" element={<AllManagers />} />
              <Route path="/edit/:id" element={<EditManager />} />
              <Route path="/search" element={<ManagerSearch />} />
            </Routes>
            
            <Footer /> 
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
