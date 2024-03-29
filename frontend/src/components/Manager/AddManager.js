import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "@emotion/react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
  FormHelperText,
} from "@mui/material";
import { addManager } from "../../server/api.js";

const Container = styled(FormGroup)`
  // width: 97%;
  // padding: 20px;
  background-color: rgba(245, 245, 245, 0.1);
  background-image: url("../website-parallax-background-C.jpg");
  background-size: cover;
  color: white;
  background-position: center;
  scrollbar-width: thin;
  scrollbar-color: #000000 transparent;

  & > div {
    // margin-top: 20px;
  }

  
`;



const Container1 = styled(FormGroup)`
  width: 40%;
  margin: 5% auto 2% auto;
  padding: 20px;
  color: white;
  background-color: rgba(245, 245, 245, 0.2);
  border-radius: 5px;

  & > div {
    margin-top: 20px;
  }
`;


const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #333333;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  password: "",
  date_of_birth: "",
  phone_number: "",
};

export default function AddManager() {
  const [manager, setManager] = useState(defaultValue);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };


  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check for empty fields
    for (const key in manager) {
      if (manager[key] === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    }

    // Add more specific validations here if needed
    // Validate phone number length
    if (manager.phone_number.length !== 11) {
      newErrors.phone_number = "Phone number should be 11 digits";
      isValid = false;
    }

  // Validate phone number to contain only digits
  if (!/^\d+$/.test(manager.phone_number)) {
    newErrors.phone_number = "Phone number should only contain digits";
    isValid = false;
  }

    // Validate date of birth format
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dobPattern.test(manager.date_of_birth)) {
      newErrors.date_of_birth = "Date of birth should be in DD/MM/YYYY format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const addManagerDetails = async () => {
    if (validateForm()) {
      await addManager(manager);
      navigate("/all");
    }
  };

  return (
    <Container>
      <Container1>
        <Typography variant="h4" align="center" gutterBottom>
          Add Manager
        </Typography>
        <FormControl error={!!errors.name} fullWidth>
          <InputLabel sx={{ color: 'white' }}>Manager Name</InputLabel>
          <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="name" style={{ fontSize: '18px', color: "yellow" }} />
          {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
        </FormControl>
        <FormControl error={!!errors.username} fullWidth>
          <InputLabel sx={{ color: 'white' }}>Manager Username</InputLabel>
          <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="username" style={{ fontSize: '18px', color: "yellow" }} />
          {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
        </FormControl>
        <FormControl error={!!errors.password} fullWidth>
          <InputLabel sx={{ color: 'white' }}>Manager Password</InputLabel>
          <Input sx={{ color: 'white' }}
            type="password"
            onChange={(e) => onValueChange(e)}
            name="password"
            style={{ fontSize: '18px', color: "yellow" }}
          />
          {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
        </FormControl>
        <FormControl error={!!errors.date_of_birth} fullWidth>
          <InputLabel sx={{ color: 'white' }}>Manager DOB (DD/MM/YYYY)</InputLabel>
          <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="date_of_birth" style={{ fontSize: '18px', color: "yellow" }} />
          {errors.date_of_birth && (
            <FormHelperText>{errors.date_of_birth}</FormHelperText>
          )}
        </FormControl>
        <FormControl error={!!errors.phone_number} fullWidth >
          <InputLabel sx={{ color: 'white' }}>Manager Phone Number</InputLabel>
          <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="phone_number" style={{ fontSize: '18px', color: "yellow" }} />
          {errors.phone_number && (
            <FormHelperText>{errors.phone_number}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth>
          <Button
            variant="contained"
            onClick={() => addManagerDetails()}
            style={{ backgroundColor: "#161616", color: "#ffffff", marginTop: 20, fontSize: '18px' }}
          >
            Add Manager
          </Button>
        </FormControl>
      </Container1>
      <Global styles={scrollbarStyles} />

    </Container>
  );
}
