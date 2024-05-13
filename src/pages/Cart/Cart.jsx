import React, { useState } from "react";
import { useCart } from "react-use-cart";
import s from "./index.module.scss";
import { Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  const shippingCost = 15; // Define shipping cost here

  const totalWithShipping = cartTotal + shippingCost;

  return (
    <Container fixed>
      <h2 className={s.title}>Cart</h2>
      <div className={s.page}>
        <div className={s.cart}>
          <div className={s.texts}>
            <p className={s.text}>Product</p>
            <p className={s.text}>Price</p>
            <p className={s.text}>Quantity</p>
          </div>

          {items.map((item) => (
            <div className={s.product}>
              <CloseIcon
                onClick={() => removeItem(item.id)}
                style={{
                  cursor: "pointer",
                }}
              />
              <p className={s.name}>
                {" "}
                <img src={item.image} className={s.image} alt="" />
                {item.name}
              </p>
              <p className={s.price}>${item.price}</p>

              <div className={s.quantity}>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className={s.product_btn}
                >
                  -
                </button>
                <p className={s.quant}>{item.quantity}</p>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className={s.product_btn}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* <button className={s.button}>UPDATE CART</button> */}
        </div>

        <div className={s.totals}>
          <p className={s.text_total}>Cart Totals</p>

          <p className={s.total}>
            Subtotal <span>${cartTotal}.00</span>
          </p>
          <p className={s.text_shiping}>Shipping to CA.</p>

          <p className={s.total}>
            Shiping{" "}
            <span
              style={{
                color: "black",
              }}
            >
              {" "}
              flat_rate: ${shippingCost}.00
            </span>
          </p>

          <hr />
          <p className={s.total}>
            Total <span>${totalWithShipping}.00</span>
          </p>

          <button className={s.checkout}>PROCEED CHECKOUT</button>
        </div>
      </div>
    </Container>
  );
};
