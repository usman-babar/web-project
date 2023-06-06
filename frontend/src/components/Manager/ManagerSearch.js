import React, { useState } from "react";
import { searchManager } from "../../server/api";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

export default function ManagerSearch() {
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (username.trim() === "") {
      setError("Please enter a username.");
      return;
    }

    try {
      const response = await searchManager({ username });
      const managers = response.data;
      if (managers.length === 0) {
        setError("No results found.");
      } else {
        setSearchResults(managers);
        setError("");
      }
      setUsername(""); // Reset the username input field value
    } catch (error) {
      // console.log("Error while searching manager:", error);
      setError("No user found.");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/website-parallax-background-C.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(245, 245, 245, 0.3)",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: "10px",
            backgroundColor: "white",
            color: "white",
            borderRadius: "20px"
          }}
        />
        <Button variant="contained" onClick={handleSearch} color="primary">
          Search
        </Button>

        {error && (
          <Typography variant="body2" color="white" style={{ marginTop: "10px" }}>
            {error}
          </Typography>
        )}

        {searchResults.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h6" color="white">
              Search Results:
            </Typography>
            <List>
              {searchResults.map((manager) => (
                <ListItem key={manager.id}>
                <ListItemText
                  primary={`Username: ${manager.name}`}
                  secondary={`Phone: ${manager.phone_number} | Creation Date: ${manager.creation_date}`}
                />
              </ListItem>
              
              
              ))}
            </List>
          </div>
        )}

        {searchResults.length === 0 && !error && (
          <Typography variant="body2" color="white" style={{ marginTop: "10px" }}>
            No results found.
          </Typography>
        )}
      </div>
    </Box>
  );
}
