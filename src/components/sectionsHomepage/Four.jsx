import React from "react";
import s from "./index.module.scss";

export const Four = () => {
  return (
    <div className={s.body}>
      <div className={s.back}>
        <p className={s.text_body}>New arrivals</p>
        <h2 className={s.title_body}>New Arrival: Stylish Running Shoes</h2>
        <p className={s.text_body}>
          Get a fresh start with our latest collection of running shoes.
          Designed to provide ultimate comfort and support, these shoes are
          perfect for any workout.
        </p>
      </div>
    </div>
  );
};
