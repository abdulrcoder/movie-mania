import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "1dcdf7fa",
  },
});

export default axiosInstance;
