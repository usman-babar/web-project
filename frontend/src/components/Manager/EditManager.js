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
padding: 39px 0 20px  ;
  // background-color: rgba(245, 245, 245, 0.5);
  background-image: url("../website-parallax-background-C.jpg");
  background-size: cover;
  color: white;

  background-position: center;

  & > div {
    margin-top: 20px;
  }


`;

const Container1 = styled(FormGroup)`
width: 40%;
margin: 5% auto 6% auto;
padding: 20px;
color: white;
background-color: rgba(245, 245, 245, 0.1);
border-radius: 5px;

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
      <Container1>
        <Typography variant="h4">Edit Manager</Typography>
        <FormControl>
          <InputLabel sx={{ color: 'white' }}>Manager Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={manager.name}
            sx={{ color: 'white' }}
          />
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: 'white' }}>Manager DOB</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="date_of_birth"
            value={manager.date_of_birth}
            sx={{ color: 'white' }}
          />
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: 'white' }}>Manager username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={manager.username}
            sx={{ color: 'white' }}
          />
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: 'white' }}>Manager phone_number</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone_number"
            value={manager.phone_number}
            sx={{ color: 'white' }}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => editManagerDetails()} style={{ backgroundColor: '#161616' }}>
            Edit Bank
          </Button>
        </FormControl>
      </Container1>
    </Container>
  );
}
