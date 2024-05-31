import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const initContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    email: "",
  });

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
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    GetData();
  }, [user]);

  return (
    <initContext.Provider
      value={{
        data,
        setData,
        user,
        setUser,
      }}
    >
      {children}
    </initContext.Provider>
  );
};
export const GetContex = () => {
  return useContext(initContext);
};
