import React from "react";
import s from "./index.module.scss";
import { Container } from "@mui/material";
import { GetContex } from "../../context/Context";
import { Link } from "react-router-dom";

export const AthleticShoes = () => {
  const { data } = GetContex();
  const filteredData = data.filter(
    (item) => item.category === "Athletic Shoes"
  );
  return (
    <>
      <Container fixed>
        <div className={s.page}>
          <h2 className={s.title}>Athletic Shoes</h2>

          <div className={s.all_shoes}>
          {filteredData.map((item) => (
            <Link to={`/Shoe/${item.id}`}>
              <div className={s.card}>
                <img className={s.image} src={item.image} alt="" />
                <h3 className={s.name}>{item.name}</h3>
                <p className={s.price}>${item.price}</p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </Container>
    </>
  );
};
