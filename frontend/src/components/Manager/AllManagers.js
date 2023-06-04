import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  styled,
} from "@mui/material";
import { getManagers, deleteManager } from "../../server/api";

const Container1 = styled(Table)`
  width: 100%;
  background-image: url("../website-parallax-background-C.jpg");
  background-size: cover;

`;
const StyledTable = styled(Table)`
  width: 80%;
  margin: 50px auto 100px auto;
  background-color: rgba(245, 245, 245, 0.1);
  // background-image: url("../website-parallax-background-C.jpg");
  // background-size: cover;
`;

const Head = styled(TableRow)`
  background: #555555;
  & > th {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
  }
`;

const ManagerCell = styled(TableCell)`
  font-size: 16px;
  padding: 12px;
`;

const ActionsCell = styled(TableCell)`
  padding: 12px;
`;

export default function AllManagers() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    getAllManagers();
  }, []);

  const getAllManagers = async () => {
    const response = await getManagers();
    setManagers(response.data);
  };

  const deleteManagerById = async (id) => {
    await deleteManager(id);
    getAllManagers();
  };

  return (
    <Container1>
    <StyledTable>
      <TableHead>
        <Head>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Username</TableCell>
          <TableCell align="center">Date of Birth</TableCell>
          <TableCell align="center">Phone Number</TableCell>
          <TableCell align="center">Edit / Delete</TableCell>
        </Head>
      </TableHead>

      <TableBody>
        {managers.map((manager) => (
          <TableRow key={manager._id}>
            <ManagerCell align="center">{manager.name}</ManagerCell>
            <ManagerCell align="center">{manager.username}</ManagerCell>
            <ManagerCell align="center">{manager.date_of_birth}</ManagerCell>
            <ManagerCell align="center">{manager.phone_number}</ManagerCell>
            <ActionsCell align="center">
              <Button
                variant="contained"
                component={Link}
                to={`/edit/${manager._id}`}
                style={{ marginRight: 8  }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "red" }}
                onClick={() => deleteManagerById(manager._id)}
                
              >
                Delete
              </Button>
            </ActionsCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable></Container1>
  );
}
