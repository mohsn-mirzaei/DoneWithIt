import apiClient from "./client";

const endpoint = "/listing";

const getListing = () => apiClient.get(endpoint);

export default {
  getListing,
};
