import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getManagers, deleteManager } from "../../server/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Head = styled(TableRow)`
  background: #555555;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

export default function AllManagers() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    getAllManagers();
  }, []);

  const getAllManagers = async () => {
    let response = await getManagers();
    setManagers(response.data);
  };

  const deleteManagerById = async (id) => {
    await deleteManager(id);
    getAllManagers();
  };

  return (
    <StyledTable>
      <TableHead>
        <Head>
          <TableCell align="center">name</TableCell>
          <TableCell align="center">username</TableCell>
          <TableCell align="center">date_of_birth</TableCell>
          <TableCell align="center">phone_number</TableCell>
          <TableCell align="center">Actions (Edit/Delete)</TableCell>
        </Head>
      </TableHead>
  
      <TableBody>
        {managers.map((manager) => (
          <TableRow key={manager._id}>
            {/* <TableCell>{manager._id}</TableCell> */}
            <TableCell align="center">{manager.name}</TableCell>
            <TableCell align="center">{manager.username}</TableCell>
            <TableCell align="center">{manager.date_of_birth}</TableCell>
            <TableCell align="center">{manager.phone_number}</TableCell>
            <TableCell align="center">
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${manager._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteManagerById(manager._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
  
}
