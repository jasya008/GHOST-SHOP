import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoShoes } from "../InfoShoes/InfoShoes";

export const Shoe = () => {
  const [dataShoes, setDataShoes] = useState([]);
  const [error, setError] = useState("");

  const { id } = useParams();

  const API_URL = `http://localhost:4000/sneakers/${id}`;

  const getDataShoes = async () => {
    try {
      const { data } = await axios.get(API_URL);
      if (Array.isArray(data)) {
        setDataShoes(data);
      } else {
        setDataShoes([data]);
      }
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
      {error && <p>Error: {error}</p>}
      {dataShoes.map((data) => (
        <InfoShoes key={data.id} data={data} />
      ))}
    </>
  );
};
