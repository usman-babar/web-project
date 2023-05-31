import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addManager } from "../../server/api.js";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
    name:'',
    date_of_birth:'',
    username:'',
    phone_number:''
};

export default function AddManager() {
  const [manager, setManager] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
  };

  const addManagerDetails = async () => {
    await addManager(manager);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add Manager</Typography>
      <FormControl>
        <InputLabel>Manager Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Manager username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Manager DOB</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date_of_birth" />
      </FormControl>
      <FormControl>
        <InputLabel>Manager phone number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone_number" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addManagerDetails()}style={{ backgroundColor: '#161616' }}>
          Add Manager
        </Button>
      </FormControl>
    </Container>
  );
}
