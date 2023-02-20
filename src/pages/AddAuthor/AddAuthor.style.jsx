import styled from "styled-components";
import {Field, Form} from "formik";
import PlusIcon from '@images/plus-icon.svg'

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`

export const ImageBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100vh;
  background-color: rgba(243, 243, 243, 0.93);
`

export const Image = styled.img`
  position: absolute;
  top: 15%;
  left: 25%;
  z-index: 2;
  border-radius: 30px;
`

export const ImageInput = styled.input`
  position: relative;
  max-width: 315px;
  width: 100%;
  height: 428px;
  background-color: #F8F8F8;
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 17px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    content: "Click or drag file to this area to upload";
    width: 169px;
    height: 106px;
    text-align: center;
    display: inline-block;
    background-image: url(${PlusIcon});
    background-position: center;
    background-repeat: no-repeat;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`

export const FormBlock = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`
export const AuthorForm = styled(Form)`
  max-width: 330px;
  width: 100%;
`
export const Title = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
`

export const Input = styled(Field)`
  margin-bottom: 16px;
  padding: 12px 22px;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #AAAAAA;
  background: #FFFFFF;
  border: 1px solid #B4B4BB;
  border-radius: 10px;
  outline: none;
`

export const Option = styled.option`
  
`

export const AuthorFormButton = styled.button`
  margin-top: 44px;
  padding: 5px 20px;
  width: 100%;
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: #FFFFFF;
  background: #152540;
  border-radius: 99px;
`