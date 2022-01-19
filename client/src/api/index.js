import axios from 'axios';

const baseURL = 'http://localhost:3001/profile';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (userID) => {
  try {
    await axios.delete(`${baseURL}/${userID}`);
    return true;
  } catch (error) {
    return error;
  }
};

export const fetchSingleData = async (userID) => {
  try {
    const { data } = await axios.get(`${baseURL}/${userID}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const updatingResource = async (state) => {
  await axios.put(`${baseURL}/${state.id}`, {
    name: state.username,
    class: state.classNumber,
    updated: state.updated,
  });
};

export const createResource = async (state) => {
  await axios.post(`${baseURL}`, {
    name: state.username,
    class: state.classNumber,
    updated: state.updated,
  });
};
