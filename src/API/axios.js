import axios from "axios";

const axiosInstance = axios.create({

  // backend locally using express server on port 5000
  // baseURL: "http://localhost:5000",
  baseURL:"https://amazon-api-deploy-12ct.onrender.com"

});

export { axiosInstance };