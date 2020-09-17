import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-backend-wilden.herokuapp.com/",
});

export default instance;
