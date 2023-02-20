import { Form, Field } from "formik";
import styled from "styled-components";

export const Title = styled.h2`
  margin: 68px 0 0;
  padding: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #212121;
`

export const SecurityForm = styled(Form)`
  margin-top: 32px;
`

export const Input = styled(Field)`
  display: block;
  margin: 7px 0 0;
  padding: 11px 20px;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #464E5F;
  background-color: #F3F6F9;
  border-radius: 4px;
  outline: none;
  border: none;
`

export const Label = styled.label`
  display: block;
  margin-top: 22px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464E5F;
`

export const SecurityButton = styled.button`
  display: block;
  margin-top: 110px;
  padding: 12px 26px;
  margin-left: auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #FFFFFF;
  background: #152540;
  border-radius: 4px;
  border: none;

  &:hover {
    opacity: .9;
  }
`