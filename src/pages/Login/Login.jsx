import React from "react";
import LoginBgi from "@images/login-bgi.png";
import {
  Block,
  Div,
  Error,
  Image,
  Input,
  LoginButton,
  LoginForm,
  LoginWrapper,
  Text,
  Title,
} from "./Login.style";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL } from "@/API/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/token/tokenAction";
import { setUser } from "@/redux/user/userAction";

export const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    axios
      .post(BASE_URL + "user/login", values)
      .then((data) => {
        if (data.status === 201) {
          toast.success("You have successfully logined");
          localStorage.setItem("token", data.data.token);
          dispatch(setToken(data.data.token));
          navigate('/');
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Something went wrong!!!");
        }
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email required!"),
    password: Yup.string()
      .required("Password required!")
      .min(3, "Password must be long 3 characters")
      .max(8, "Password must be last 8 characters"),
  });

  return (
    <Div>
      <Image
        src={LoginBgi}
        width="500"
        height="500"
        alt="Login background image"
      />
      <LoginWrapper>
        <Block>
          <Block>
            <Title>Sign in</Title>
            <Text>
              Do not you have an account? <Link to="/register">Sign up</Link>
            </Text>
          </Block>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <LoginForm>
              <Input type="text" placeholder="Email" name="email" />
              <Error>
                <ErrorMessage name="email" />
              </Error>
              <Input type="password" placeholder="Password" name="password" />
              <Error>
                <ErrorMessage name="password" />
              </Error>
              <LoginButton type="submit">Next step</LoginButton>
            </LoginForm>
          </Formik>
        </Block>
      </LoginWrapper>
      <ToastContainer theme="dark" />
    </Div>
  );
};
