import { Container } from "@mui/material";
import React from "react";
import s from "./index.module.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { useCart } from "react-use-cart";

export const Layouts = () => {
  const { totalUniqueItems } = useCart();
  const setActive = ({ isActive }) => (isActive ? "active-page" : null);
  return (
    <>
      <header>
        <Container fixed>
          <nav>
            <Link to="/">
              <h2 className={s.logo}>GHOST SHOP</h2>
            </Link>

            <div className={s.all_links}>
              <NavLink to="/All-Shoes" className={setActive}>
                Shop All
              </NavLink>
              <NavLink to="/SportShoes" className={setActive}>
                {" "}
                Sport Shoes
              </NavLink>
              <NavLink to="/AthleticShoes" className={setActive}>
                Athletic Shoes
              </NavLink>
              <NavLink to="/SlipOnsShoes" className={setActive}>
                Slip-Ons
              </NavLink>
              <NavLink to="/HighTopsShoes" className={setActive}>
                High Tops
              </NavLink>
            </div>

            <div className={s.cart}>
              <Link to="/Cart">
                <ShoppingBagIcon className={s.icon} />
                <div className={s.num}>{totalUniqueItems}</div>
              </Link>
            </div>
          </nav>
        </Container>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
