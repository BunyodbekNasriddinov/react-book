import React from "react";
import RegisterBgi from "@images/register-bgi.png";
import {
  Block,
  Div,
  Error,
  Image,
  Input,
  RegisterButton,
  RegisterForm,
  RegisterWrapper,
  Text,
  Title,
} from "./Register.style";

import { Link, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/token/tokenAction";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "@/API/url";
import { setUser } from "@/redux/user/userAction";

export const Register = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name required"),
    last_name: Yup.string().required("Last name required"),
    phone: Yup.string()
      .required("A phone number i required!")
      .min(9, "Invalid phone nnumber!")
      .max(9, "Invalid phone number!"),
    email: Yup.string()
      .email("Invalid email format!")
      .required("Email required!"),
    password: Yup.string()
      .required("Password required!")
      .min(3, "Password must be long 3 characters")
      .max(8, "Password must be last 8 characters"),
  });


  const handleSubmit = (values) => {
    axios.post(BASE_URL + "user/register", values)
      .then(data => {
        if (data.status === 201) {
          toast.success("You have successfully registered");
          localStorage.setItem("token", data.data.token);
          dispatch(setToken(data.data.token))
          navigate("/");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Something went wrong!!!");
        }
      })
  }
  return (
    <Div>
      <Image
        src={RegisterBgi}
        width="500"
        height="500"
        alt="Login background image"
      />
      <RegisterWrapper>
        <Block>
          <Block>
            <Title>Sign up</Title>
            <Text>
              Do not you have an account? <Link to="/login">Sign in</Link>
            </Text>
          </Block>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <RegisterForm>
              <Input tpye="text" placeholder="First name" name="first_name" />
              <Error>
                <ErrorMessage name="first_name" />
              </Error>
              <Input tpye="text" placeholder="Last name" name="last_name" />
              <Error>
                <ErrorMessage name="last_name" />
              </Error>
              <Input tpye="text" placeholder="Phone" name="phone" />
              <Error>
                <ErrorMessage name="phone" />
              </Error>
              <Input type="text" placeholder="Email" name="email" />
              <Error>
                <ErrorMessage name="email" />
              </Error>
              <Input type="password" placeholder="Password" name="password" />
              <Error>
                <ErrorMessage name="password" />
              </Error>
              <RegisterButton type="submit">Next step</RegisterButton>
            </RegisterForm>
          </Formik>
        </Block>
      </RegisterWrapper>
      <ToastContainer theme='dark' />
    </Div>
  );
};
