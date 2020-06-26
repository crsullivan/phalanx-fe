import axios from "axios";

const axiosLoginAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "",
    headers: {
      Authorization: token
    }
  });
};

export default axiosLoginAuth;