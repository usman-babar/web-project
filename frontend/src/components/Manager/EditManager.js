import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: '',
  date_of_birth: '',
  username: '',
  phone_number: ''
};

export default function EditManager() {
  const [manager, setManager] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadManagerDetails();
  }, []);

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

  return (
    <Container>
      <Typography variant="h4">Edit Manager</Typography>
      <FormControl>
        <InputLabel>Manager Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={manager.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Manager DOB</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="date_of_birth"
          value={manager.date_of_birth}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Manager username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={manager.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Manager phone_number</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone_number"
          value={manager.phone_number}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editManagerDetails()} style={{backgroundColor:'#161616'}}>
          Edit Bank
        </Button>
      </FormControl>
    </Container>
  );
}
