import styled from "styled-components";
import { Form, Field } from "formik";

export const Div = styled.div`
  display: flex;
`;

export const Image = styled.img`
  flex-grow: 1;
  background-color: #c9ac8c;
  height: 100vh;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-family: "Arial Black";
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`;

export const Text = styled.p`
  margin: 10px 0 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #000000;
`;

export const Block = styled.div``;

export const RegisterForm = styled(Form)`
  margin-top: 20px;
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 17px;
  padding-top: 17px;
  padding-left: 29px;
  padding-bottom: 9px;
  width: 330px;
  background-color: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const RegisterButton = styled.button`
  display: block;
  width: 330px;
  margin-top: 34px;
  font-family: "Red Hat Display";
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  background-color: #152540;
  border-radius: 99px;
  border: none;
`;

export const Error = styled.span`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ff0000;
`;
