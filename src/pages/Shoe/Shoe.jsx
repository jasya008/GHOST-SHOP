import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoShoes } from "../InfoShoes/InfoShoes";

export const Shoe = () => {
  const [dataShoes, setDataShoes] = useState([]);
  const [error, setError] = useState("");

  const { id } = useParams();

  const API_URL = "http://localhost:4000/sneakers";

  const getDataShoes = async () => {
    try {
      const { data } = await axios(`${API_URL}/${id}`);
      setDataShoes(Array.isArray(data) ? data : [data]); 
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getDataShoes();
  }, []);

  console.log(dataShoes);

  return (
    <>
      {Array.isArray(dataShoes) &&
        dataShoes.map((data) => <InfoShoes key={data.id} data={data} />)}
    </>
  );
};
