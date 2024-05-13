import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

export const Second = () => {
  return (
    <>
      <div className={s.second}>
        <p className={s.text}>Trending</p>
        <p className={s.title}>Shop by categories</p>

        <div className={s.categories}>
          <div className={s.category}>
            <img src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/whitesneakers-2048px-4197_Y6IFvMR2.webp" alt="" className={s.category_img} />
            <Link to="/SportShoes">
              {" "}
              <p className={s.text}>Sport Shoes</p>
            </Link>
          </div>
          <div className={s.category}>
            <img src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/run-reebok-running-shoes-64e3beadbe692_Y6IFvMR2.webp" alt="" className={s.category_img} />
            <Link to="/SlipOnsShoes">
              <p className={s.text}>Slip-Ons</p>
            </Link>
          </div>{" "}
          <div className={s.category}>
            <img src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/aw22-digital-content-guards-parade-050_Y6IFvMR2.webp" alt="" className={s.category_img} />
            <Link to="/HighTopsShoes">
              <p className={s.text}>High Tops</p>
            </Link>
          </div>{" "}
          <div className={s.category}>
            <img src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/04/image-995251d5-47fd-4c98-a3be-bac62a281a94-_11_800x_Y6IFvMR2.webp" alt="" className={s.category_img} />
            <Link to="/AthleticShoes">
              <p className={s.text}>Athletic Shoes</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
