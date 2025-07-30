import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api"; // Adjust to your backend URL
export const getMovies = async (page: number, limit: number) => {
  const response = await axios.get(`${API_BASE_URL}/movies`, {
    params: { page, limit },
  });
  return response.data;
};

export const createMovie = async (entryData: object) => {
  const response = await axios.post(`${API_BASE_URL}/movies`, entryData);
  return response.data;
};

export const updateMovie = async (id: number, entryData: object) => {
  const response = await axios.put(`${API_BASE_URL}/movies/${id}`, entryData);
  return response.data;
};

export const deleteMovie = async (id: number) => {
  await axios.delete(`${API_BASE_URL}/movies/${id}`);
};
