import { useState, useEffect } from "react";
import backup from "../assets/data.json";

const useData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Error, using backup data", error);
      setData(backup);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    setData,
  };
};

export default useData;
