import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.20.120.105:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
