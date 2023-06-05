import React from "react";
import { styled } from "@mui/material";

const FooterContainer = styled("footer")`
  background-color: #161616;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  const projectName = "Bank Management System";
  const linkedinUrl = "https://www.linkedin.com/in/usmanbabar06/";

  const LinkedInLink = styled("a")`
  color: lightblue;
`;

  return (
    <FooterContainer>
      <p>{projectName}</p>
      <p>
        Follow us on LinkedIn:{" "}
        <LinkedInLink href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <b>usmanbabar06</b>
        </LinkedInLink>
      </p>
      <p>&copy; {new Date().getFullYear()} Usman Babar. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
