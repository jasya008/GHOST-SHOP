import React from "react";
import s from "./index.module.scss";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export const First = () => {
  return (
    <>
      <div className={s.firts}>
        <div className={s.images}>
          <img
            src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/Image-8_Y6IFvMR2.webp"
            alt=""
            className={s.image}
          />
          <img
            src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/Image-10_Y6IFvMR2.webp"
            alt=""
            className={s.image}
          />
          <img
            src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/Image-11_Y6IFvMR2.webp"
            alt=""
            className={s.image}
          />
        </div>

        <h1 className={s.title}>EXPERIENCE COMFORT & STYLE</h1>
        <p className={s.text}>Find your perfect pair</p>
        <Link className={s.button} to="/All-Shoes">
          SHOP NOW
        </Link>
      </div>
    </>
  );
};
