import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";
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

const Container1 = styled("div")`
width: 100%;
height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: flex-start;
background-image: url("../website-parallax-background-C.jpg");
background-size: cover;
background-position: center;
// overflow: auto;
overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #161616 transparent;
padding-top: 50px;
padding-bottom: 50px;

`;

const StyledTable = styled(Table)`
width: 80%;
background-color: rgba(245, 245, 245, 0.2);
`;

const Head = styled(TableRow)`
  background: #555555;
  & > th {
    color: white;
    font-size: 22px;
    font-weight: bold;
    padding: 12px;

    background-color: #292929
  }
`;

const ManagerCell = styled(TableCell)`
  font-size: 18px;
  color: white;

  padding: 12px;
`;

const ActionsCell = styled(TableCell)`
  padding: 12px;
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
    <Container1 >
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
                  style={{ marginRight: 8 }}
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

      </StyledTable>
      <Global styles={scrollbarStyles} />


    </Container1>
  );
}
