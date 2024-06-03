import React from "react";
import s from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { Button, Container } from "@mui/material";
import { InputTexfiled } from "../../components/UI/InputTexfiled";

export const Registr = () => {
  const USERS_URL = "http://localhost:4000/users/register";

  const registerSchema = object({
    name: string()
      .nonempty("You must write smth")
      .min(3, "more than 3")
      .max(20, "not more than 20"),
    Email: string()
      .nonempty("Write ur email")
      .email("get the valid email")
      .min(5, "more than 5")
      .max(40, "not more than 40"),
    password: string()
      .nonempty("Create the password")
      .min(3, "more than 3")
      .max(20, "not more than 20"),
    City: string()
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

  const onRegiterSubmit = async () => {
    try {
      const { data } = await axios.post(USERS_URL);
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.accessToken,
          ...data.user,
        })
      );

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={s.auth}>
        <Container>
          <div className={s.auth_content}>
            <FormProvider {...methods}>
              <form
                className={s.auth_form}
                onSubmit={handleSubmit(onRegiterSubmit)}
              >
                <InputTexfiled
                  name="name"
                  label="Name"
                  size="small"
                  margin="dense"
                />
                <InputTexfiled
                  name="Email"
                  label="Email"
                  size="small"
                  margin="dense"
                />
                <InputTexfiled
                  name="password"
                  label="password"
                  type="password"
                  size="small"
                  margin="dense"
                />
                <InputTexfiled
                  name="City"
                  label="City"
                  size="small"
                  margin="dense"
                />
                <InputTexfiled
                  name="Adress"
                  label="Adress"
                  size="small"
                  margin="dense"
                />

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginBottom: 1 }}
                >
                  Registration
                </Button>
              </form>
            </FormProvider>
          </div>
        </Container>
      </div>
    </>
  );
};
