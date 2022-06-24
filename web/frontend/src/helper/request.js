import axios from "axios";

export const request = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});
