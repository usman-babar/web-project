// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FormGroup,
//   FormControl,
//   InputLabel,
//   Input,
//   Typography,
//   styled,
//   Button,
//   FormHelperText,
// } from "@mui/material";
// import { addManager } from "../../server/api.js";

// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% auto 2% auto;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border-radius: 5px;

//   & > div {
//     margin-top: 20px;
//   }
// `;

// const defaultValue = {
//   name: "",
//   username: "",
//   password: "",
//   date_of_birth: "",
//   phone_number: "",
// };

// export default function AddManager() {
//   const [manager, setManager] = useState(defaultValue);
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   const onValueChange = (e) => {
//     setManager({ ...manager, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     // Check for empty fields
//     for (const key in manager) {
//       if (manager[key] === "") {
//         newErrors[key] = "This field is required";
//         isValid = false;
//       }
//     }

//     // Add more specific validations here if needed

//     setErrors(newErrors);
//     return isValid;
//   };

//   const addManagerDetails = async () => {
//     if (validateForm()) {
//       await addManager(manager);
//       navigate("/all");
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom>
//         Add Manager
//       </Typography>
//       <FormControl error={!!errors.name} fullWidth>
//         <InputLabel>Manager Name</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="name" />
//         {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
//       </FormControl>
//       <FormControl error={!!errors.username} fullWidth>
//         <InputLabel>Manager Username</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="username" />
//         {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
//       </FormControl>
//       <FormControl error={!!errors.password} fullWidth>
//         <InputLabel>Manager Password</InputLabel>
//         <Input
//           type="password"
//           onChange={(e) => onValueChange(e)}
//           name="password"
//         />
//         {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
//       </FormControl>
//       <FormControl error={!!errors.date_of_birth} fullWidth>
//         <InputLabel>Manager DOB (DD/MM/YYYY)</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="date_of_birth" />
//         {errors.date_of_birth && (
//           <FormHelperText>{errors.date_of_birth}</FormHelperText>
//         )}
//       </FormControl>
//       <FormControl error={!!errors.phone_number} fullWidth>
//         <InputLabel>Manager Phone Number</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="phone_number" />
//         {errors.phone_number && (
//           <FormHelperText>{errors.phone_number}</FormHelperText>
//         )}
//       </FormControl>
//       <FormControl fullWidth>
//         <Button
//           variant="contained"
//           onClick={() => addManagerDetails()}
//           style={{ backgroundColor: "#161616", color: "#ffffff", marginTop: 20 }}
//         >
//           Add Manager
//         </Button>
//       </FormControl>
//     </Container>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  width: 97%;
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.1);
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
  margin: 5% auto 2% auto;
  padding: 20px;
  color: white;
  background-color: rgba(245, 245, 245, 0.1);
  border-radius: 5px;

  & > div {
    margin-top: 20px;
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
        <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="name" style={{fontSize: '18px', color: "yellow"}}/>
        {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
      </FormControl>
      <FormControl error={!!errors.username} fullWidth>
        <InputLabel sx={{ color: 'white' }}>Manager Username</InputLabel>
        <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="username" style={{fontSize: '18px' }}/>
        {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
      </FormControl>
      <FormControl error={!!errors.password} fullWidth>
        <InputLabel sx={{ color: 'white' }}>Manager Password</InputLabel>
        <Input sx={{ color: 'white' }}
          type="password"
          onChange={(e) => onValueChange(e)}
          name="password"
          style={{fontSize: '18px' }}
        />
        {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
      </FormControl>
      <FormControl error={!!errors.date_of_birth} fullWidth>
        <InputLabel sx={{ color: 'white' }}>Manager DOB (DD/MM/YYYY)</InputLabel>
        <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="date_of_birth" style={{fontSize: '18px' }} />
        {errors.date_of_birth && (
          <FormHelperText>{errors.date_of_birth}</FormHelperText>
        )}
      </FormControl>
      <FormControl error={!!errors.phone_number} fullWidth>
        <InputLabel sx={{ color: 'white' }}>Manager Phone Number</InputLabel>
        <Input sx={{ color: 'white' }} onChange={(e) => onValueChange(e)} name="phone_number" style={{fontSize: '18px' }}  />
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
    </Container>
  );
}
