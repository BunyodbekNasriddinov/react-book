import React from 'react'
import { Container } from '../GlobalStyle/GlobalStyle'
import { Input, Label, SecurityButton, SecurityForm, Title } from './Security.style'
import { Formik } from 'formik'
import * as Yup from "yup";
import { toast } from "react-toastify";
import { BASE_URL } from "@/API/url";
import axios from "axios";
import { Error } from '../ProfileEdit/ProfileEdit.style';
import { ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';


export const Security = () => {
  const token = useSelector(state => state.token.token);

  const initialValues = {
    email: "",
    currentPassword: "",
    newPassword: "",
  };



  const handleSubmit = (values) => {
    axios.put(BASE_URL + "user/security", values, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.status === 201) {
          toast.success("You have successfully changes");
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
      .required("Please enter your email."),
    currentPassword: Yup.string()
      .required("Please enter your current password.")
      .min(3, "Password must be long 3 characters")
      .max(8, "Password must be last 8 characters"),
    newPassword: Yup.string()
      .required("Please enter your new password.")
      .min(3, "Password must be long 3 characters")
      .max(8, "Password must be last 8 characters"),
  });



  return (
    <Container>
      <Title>Change Or Recover Your Password:</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <SecurityForm>
          <Label>Email</Label>
          <Input type='email' placeholder='admin@gmail.com' name='email' />
          <Error>
            <ErrorMessage name='email' />
          </Error>
          <Label>Current password</Label>
          <Input type='password' placeholder='*********' name='currentPassword' />
          <Error>
            <ErrorMessage name='currentPassword' />
          </Error>
          <Label>New Password</Label>
          <Input type='password' placeholder='*********' name='newPassword' />
          <Error>
            <ErrorMessage name='newPassword' />
          </Error>
          <SecurityButton type="submit">Save Changes</SecurityButton>
        </SecurityForm>
      </Formik>
    </Container>
  )
}
