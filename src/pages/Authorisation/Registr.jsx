import React from "react";
import s from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Registr = () => {
  const USERS_URL = "http://localhost:4000/users/register";
  const navigate = useNavigate();
  const registerSchema = object({
    name: string()
      .nonempty("You must write smth")
      .min(3, "more than 3")
      .max(20, "not more than 20"),
    email: string().nonempty("Write ur email").email("get the valid email"),
    password: string()
      .nonempty("Create the password")
      .min(3, "more than 3")
      .max(20, "not more than 20"),
    city: string()
      .nonempty("Write city where u live")
      .min(3, "more than 3")
      .max(20, "not more than 20"),
    Adress: string()
      .nonempty("Write where u live")
      .min(5, "more than 5")
      .max(25, "not more than 25"),
  });

  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, reset } = methods;

  const onRegiterSubmit = async (newUser) => {
    try {
      const { ...rest } = newUser;
      const { data } = await axios.post(USERS_URL, newUser);
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.accessToken,
          ...data.user,
        })
      )

      reset()
    } catch(error) {
      console.log(error);
    }
  };

  return <div>Registr</div>;
};
