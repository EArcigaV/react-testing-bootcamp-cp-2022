import { useState, useEffect } from "react";

function useFetch(date) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photoData, setPhotoData] = useState("");

  //const today = new Date();
  //const [date, setDate] = useState(today);
  //let formattedDate = date.toISOString().split("T")[0];
  //let formattedDate = "2022-04-25";

  useEffect(() => {
    setLoading(true);
    //console.log(date);

    const photoOfTheDay = async () => {
      const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
      const nasaApiUrl = "https://api.nasa.gov/planetary/apod";

      let url = `${nasaApiUrl}?api_key=${nasaApiKey}&date=${date}`;
      //console.log(url);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }
        const data = await response.json();

        setPhotoData(data);
        setLoading(false);

        //console.log(data.url);
        //console.log(data);
        console.log(date);
      } catch (err) {
        console.log("error", err);
        setError(err);
      }
    };
    photoOfTheDay();
  }, [date]);

  return { photoData, loading, error };
}

export default useFetch;
