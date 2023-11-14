import apiClient from "./client";

const endpoint = "/listings";

const getListing = () => apiClient.get(endpoint);

const addListig = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((index, image) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    return data.append("location", JSON.stringify(listing.location));

  return apiClient.post(endpoint, data);
};

export default {
  addListig,
  getListing,
};
