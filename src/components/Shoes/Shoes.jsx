import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

export const Shoes = ({ data }) => {
  return (
    <Link to={`/Shoe/${data.id}`}>
      <div className={s.card}>
        <img className={s.image} src={data.image} alt="" />
        <h3 className={s.name}>{data.name}</h3>
        <p className={s.price}>${data.price}</p>
      </div>
    </Link>
  );
};
