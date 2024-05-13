import React from "react";
import s from "./index.module.scss";
import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className={s.Footer}>
        <Container fixed>
          <div className={s.content}>
            <div className={s.part}>
              <h3 className={s.logo}>GHOST SHOP</h3>
              <div className={s.icons}>
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </div>
            </div>
            <div className={s.part}>
              <h3 className={s.title}>Category</h3>
              <div className={s.texts}>
                <Link to="/"> Sport Shoes</Link>
                <Link to="/"> Athletic Shoes</Link>
                <Link to="/"> Slip-Ons</Link>
                <Link to="/"> High Tops</Link>
              </div>
            </div>{" "}
            <div className={s.part}>
              <h3 className={s.title}>Recources</h3>
              <div className={s.texts}>
                <Link to="/">Contact</Link>
                <Link to="/">Help</Link>
              </div>
            </div>
            <div className={s.part}>
              <h3 className={s.title}>Subscribe</h3>
              <div className={s.texts}>
                <input type="email" placeholder="Email" className={s.input} />
                <button className={s.button}>Send</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
