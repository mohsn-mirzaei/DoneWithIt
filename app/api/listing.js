import apiClient from "./client";

const endpoint = "/listings";

const getListing = () => apiClient.get(endpoint);

export default {
  getListing,
};
