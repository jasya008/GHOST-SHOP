import React from "react";
import s from "./index.module.scss";
import { GetContex } from "../../context/Context";
import { Shoes } from "../../components/Shoes/Shoes";

export const AllShoes = () => {
  const { data, setData } = GetContex();

  return (
    <div className={s.AllShoes}>
      <h1 className={s.title}>Shop all</h1>

      <div className={s.all_shoes}>
        {data.map((data) => (
          <Shoes key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
