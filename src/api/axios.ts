import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: "1dcdf7fa",
  },
});
export default axiosInstance;
