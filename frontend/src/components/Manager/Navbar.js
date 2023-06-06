import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Logo from "../../LOGO.png";

const Header = styled(AppBar)`
  background: #161616;
`;

const LogoImage = styled("img")`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ffffff80; /* Hover color with transparency */
  }
`;

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Header position="static">
      <Toolbar>
        <NavLink to="/">
          <LogoImage src={Logo} alt="Logo" />
        </NavLink>
        <Tabs to="/">Bank Management System</Tabs>
        <Tabs to="/add">Add Manager</Tabs>
        <Tabs to="/all">All Managers</Tabs>
        <Tabs to="/search">Search Manager</Tabs>
        <Box flexGrow={1} />
        <Tabs to="" onClick={handleLogout} style={{ color: "red" }}>
          Logout
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
