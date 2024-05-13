import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const initContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const API_URL = "http://localhost:4000/sneakers";
  const GetData = async () => {
    try {
      const { data } = await axios(API_URL);
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <initContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </initContext.Provider>
  );
};
export const GetContex = () => {
  return useContext(initContext);
};
