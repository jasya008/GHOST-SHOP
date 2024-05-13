import { Container } from "@mui/material";
import s from "./index.module.scss";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useCart } from "react-use-cart";

export const InfoShoes = ({ data }) => {
  const { addItem } = useCart();


  return (
    <>
      <Container fixed>
        <div className={s.page_shoes}>
          <img className={s.image} src={data.image} alt="" />

          <div className={s.content}>
            <p className={s.text_types}>
              {" "}
              Home /{data.category}/ {data.name}
            </p>
            <h3 className={s.name}>{data.name}</h3>
            <h5 className={s.price}>${data.price}</h5>
            <p className={s.quota}>{data.quota}</p>
            <div className={s.addCart}>
              <div className={s.inputs}>
            
                <button className={s.button_cart} onClick={() => addItem(data)}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <p className={s.types}>
              <span>Category</span> {data.category} | <span>Collection</span>{" "}
              Shop all
            </p>

            <p className={s.text_pay}>Guaranteed Safe Checkout</p>
            <div className={s.pay}>
              <img
                src="https://10web-site.ai/17/wp-content/uploads/sites/19/2023/11/Credit-Card_CouVf0M2.webp"
                alt=""
                className={s.image_pay}
              />
            </div>
            <p className={s.title_discount}>
              Free shipping on orders over $50!
            </p>
            <div className={s.texts_discount}>
              <p className={s.text_disc}>
                <CheckCircleIcon className={s.icon} />
                No-Risk Money Back Guarantee!
              </p>
              <p className={s.text_disc}>
                <CheckCircleIcon className={s.icon} />
                No Hassle Refunds
              </p>
              <p className={s.text_disc}>
                <CheckCircleIcon className={s.icon} />
                Secure Payments
              </p>
            </div>
          </div>
        </div>

        <div className={s.description}>
          <h4 className={s.descript_text}>DESCRIPTION</h4>
          <div className={s.content_desc}>
            <h3 className={s.title_desc}>Description</h3>
            <p className={s.all_desctiption}>{data.description}</p>
          </div>
        </div>
      </Container>
      ;
    </>
  );
};
