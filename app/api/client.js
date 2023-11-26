import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.150.22:9000/api",
});

export default apiClient;
