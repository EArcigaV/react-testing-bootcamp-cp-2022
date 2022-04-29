import { useState, useEffect } from "react";
import { getFormattedDate } from "../utils";
function useFetch(date) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const getPhotoOfTheDay = async () => {
      const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
      const nasaApiUrl = "https://api.nasa.gov/planetary/apod";

      const url = `${nasaApiUrl}?api_key=${nasaApiKey}&date=${getFormattedDate(
        date
      )}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }

        const data = await response.json();

        setPhotoData(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError(err.msg || "There was an error, please try again");
      }
    };
    getPhotoOfTheDay();
    return () => controller.abort();
  }, [date]);

  return { photoData, loading, error };
}

export default useFetch;
