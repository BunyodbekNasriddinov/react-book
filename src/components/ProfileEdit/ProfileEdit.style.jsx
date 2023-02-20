import styled from "styled-components";
import { Form, Field } from "formik"
import CameraIcon from '@images/camera-icon.svg'

export const Block = styled.div`
  margin-left: 108px;
  width: 100%;
`

export const ProfileWrapper = styled.div`
  display: flex;
  margin-top: 83px;
`

export const ProfileImageWrapper = styled.div`
  position: relative;
  max-width: 175px;
  width: 100%;
  height: 175px;
  border-radius: 50%;
  background-color: #E5EAEE;

`

export const ProfileImage = styled.img`
  max-width: 175px;
  width: 100%;
  height: 175px;
  border-radius: 50%;
  background-size: auto;
`
export const ProfileImgFile = styled.input`
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 50px;
  background-color: #F3F6F9;
  border-radius: 8px;
  background-image: url(${CameraIcon});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }

  &::-webkit-file-upload-button {
  visibility: hidden;
  }
`

export const ProfileTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #212121;
`

export const ProfileForm = styled(Form)`
  margin-top: 32px;
  width: 100%;
`
export const Label = styled.label` 
  display: block;
  margin: 22px 0 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464E5F;
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

export const Error = styled.span`
  display: inline-block;
  margin-top: 3px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #B5B5C3;
  opacity: 0.8;
`
export const Line = styled.span`
  display: block;
  margin: 26px 0 44px 0;
  width: 100%;
  height: 1px;
  background-color: #ECF0F3;
`

export const ProfileEditButton = styled.button`
  display: block;
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