import axios from "axios";

const API_URL = "https://api.chucknorris.io";

const config = {
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const API = axios.create(config);

API.interceptors.request.use(
  async (conf) => {
    const token = undefined;
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
  },
  (error) => {
    console.error("request interceptor error", error);
    return Promise.reject(error);
  },
);

export default API;
