import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5244",
});

export const getAllReadings = async () => {
  const response = await api.get("/temperature");
  return response.data;
};

export const getLatestReading = async () => {
  const response = await api.get("/temperature/latest");
  return response.data;
};