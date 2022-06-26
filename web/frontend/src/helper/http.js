import axios from "axios";

const tokens = JSON.parse(localStorage.getItem("auth"));
const access_token = tokens?.tokens?.access_token;

export const http = axios.create({
  baseURL: 'http://localhost:8000/api',

  headers: {
    Authorization: "Bearer " + access_token,
  },
});
