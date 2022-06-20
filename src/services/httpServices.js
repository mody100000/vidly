import Axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (expectedError) {
    // console.log("ther is an error", error);
    logger.log(error);
    toast.error("ther is an error dude");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  Axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: Axios.get,
  put: Axios.put,
  delete: Axios.delete,
  post: Axios.post,
  setJwt,
};
