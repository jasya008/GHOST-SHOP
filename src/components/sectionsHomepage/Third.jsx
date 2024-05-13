import React from "react";
import s from "./index.module.scss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Container } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import PaidIcon from '@mui/icons-material/Paid';
export const Third = () => {
  return (
    <>
      <p className={s.text}>Shop you way</p>
      <p className={s.title}>Why choose us</p>

      <div className={s.cards}>
        <div className={s.card}>
          <LocalShippingIcon className={s.icon} />
          <h4 className={s.title_card}>Free Shipping</h4>
          <p className={s.text_card}>
            Enjoy free shipping on all orders, no matter the size or price. We
            believe that everyone should have access to quality sneakers without
            having to worry about shipping costs.
          </p>
        </div>
        <div className={s.card}>
          <CreditCardIcon className={s.icon} />
          <h4 className={s.title_card}>Easy Returns</h4>
          <p className={s.text_card}>
            We want you to be completely satisfied with your purchase. That's
            why we offer easy returns and exchanges, so you can shop with
            confidence.
          </p>
        </div>
        <div className={s.card}>
          <SecurityIcon className={s.icon} />
          <h4 className={s.title_card}>Secure Checkout</h4>
          <p className={s.text_card}>
            Our checkout process is safe and secure, ensuring that your personal
            information is protected every step of the way. Shop with peace of
            mind at Ghost Shop.
          </p>
        </div>
        <div className={s.card}>
          <PaidIcon className={s.icon} />
          <h4 className={s.title_card}>Responsive Customer Service</h4>
          <p className={s.text_card}>
            Our dedicated customer service team is here to answer any questions
            you may have and ensure that your shopping experience is as seamless
            as possible. Contact us anytime and we'll be happy to assist you
          </p>
        </div>
      </div>
    </>
  );
};
