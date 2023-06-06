import axios from "axios";

// const app = require("./app");
// 5678
// app.listen(5678, () => {
//   console.log("Example app listening on port 5678!");
// });

const URL = "http://localhost:3001";

//Add Manager
export const addManager = async (data) => {
  try {
    console.log(data);
    return await axios.post(`${URL}/manager/add`, data);
  } catch (error) {
    console.log('error ha');
    console.log(`Erroe while calling add Managers api `, error);
  }
};
//Display all Manager
export const getManagers = async () => {
  try {
    return await axios.get(`${URL}/manager/all`);
  } catch (error) {
    console.log(`Error while calling get Managers api `, error);
  }
};

// Search Manager
export const searchManager = async (data) => {
  try {
    console.log("API ",data);
    return await axios.post(`${URL}/manager/search`, data);
  } catch (error) {
    console.log(`Error while calling searchManager API `, error);
  }
};

//Display get Manager by id
export const getManager = async (id) => {
  try {
    return await axios.get(`${URL}/manager/${id}`);
  } catch (error) {
    console.log(`Error while calling getManager api `, error);
  }
};
//Edit Manager
export const editManager = async (data, id) => {
  // let url = `${URL}/${id}`;
  // console.log(url);
  try {
    return await axios.put(`${URL}/manager/${id}`, data);

  } catch (error) {
    console.log(data);
    console.log(`Erroe while calling Edit Manager api `, error);
  }
};
//Delete Manager
export const deleteManager = async (id) => {
  try {
    console.log(`${URL}/${id}`);
    return await axios.delete(`${URL}/manager/${id}`);
  } catch (error) {
    // console.log(data);
    console.log(`Erroe while calling Delete Manager api `, error);
  }
};

