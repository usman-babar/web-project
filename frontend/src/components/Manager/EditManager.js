import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Global } from "@emotion/react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { editManager, getManager } from "../../server/api";

const Container = styled(FormGroup)`
padding: 39px 0 20px;
background-image: url("../website-parallax-background-C.jpg");
background-size: 100% 100%;
color: white;
background-position: center;
scrollbar-width: thin;
scrollbar-color: #000000 transparent;
& > div {
  margin-top: 20px;
}
`;

const Container1 = styled(FormGroup)`
  width: 40%;
  margin: 5% auto 6% auto;
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
  date_of_birth: "",
  username: "",
  phone_number: "",
};

export default function EditManager() {
  const [manager, setManager] = useState(defaultValue);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadManagerDetails();
  }, []);

  useEffect(() => {
    validateForm();
  }, [manager]);

  const loadManagerDetails = async () => {
    const response = await getManager(id);
    setManager(response.data);
  };

  const onValueChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
  };

  const editManagerDetails = async () => {
    await editManager(manager, id);
    navigate("/all");
  };

const validateForm = () => {
  const { name, date_of_birth, username, phone_number } = manager;
  const isValid =
    name.trim() !== "" &&
    date_of_birth.trim() !== "" &&
    username.trim() !== "" &&
    phone_number.trim() !== "" &&
    /^\d{11}$/.test(phone_number); // Check if phone_number is exactly 11 digits

  setIsFormValid(isValid);
};


  return (
    <Container>
      <Container1>
        <Typography variant="h4">Edit Manager</Typography>
        <FormControl>
          <InputLabel sx={{ color: "white" }}>Manager Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={manager.name}
            sx={{ color: "white" }}
          />
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: "white" }}>Manager DOB</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="date_of_birth"
            value={manager.date_of_birth}
            sx={{ color: "white" }}
          />
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: "white" }}>Manager username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={manager.username}
            sx={{ color: "white" }}
          />
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: "white" }}>Manager phone_number</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone_number"
            value={manager.phone_number}
            sx={{ color: "white" }}
          />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            onClick={() => editManagerDetails()}
            style={{ backgroundColor: "#161616" }}
            disabled={!isFormValid}
          >
            Edit Bank
          </Button>
        </FormControl>
      </Container1>
      <Global styles={scrollbarStyles} />
    </Container>
  );
}
