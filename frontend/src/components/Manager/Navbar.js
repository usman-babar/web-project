import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const Header = styled(AppBar)`
  background: #161616;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  text-decoration: none;
`;

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Bank Management System</Tabs>
        <Tabs to="/add">Add Manager</Tabs>
        <Tabs to="/all">All Managers</Tabs>
        <Box flexGrow={1} /> 
        <Tabs to="" onClick={handleLogout}>Logout</Tabs> {/* Render the Logout button */}
      </Toolbar>
    </Header>
  );
};

export default Navbar;
