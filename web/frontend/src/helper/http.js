import axios from "axios";

const tokens = JSON.parse(localStorage.getItem("auth"));
const access_token = tokens?.tokens?.access_token;

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  headers: {
    Authorization: "Bearer " + access_token,
  },
});
