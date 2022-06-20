import httpServices from "./httpServices";
import config from "../config.json";
export function getGenres() {
  return httpServices.get(config.apiUrl + "/genres");
}
