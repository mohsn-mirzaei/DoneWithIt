import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setLoading(false);
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
