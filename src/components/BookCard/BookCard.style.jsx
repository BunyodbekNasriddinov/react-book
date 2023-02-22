import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookLink = styled(Link)`
  display: block;
  width: 190px;
`

export const Image = styled.img`
  border-radius: 15px;
`

export const Title = styled.h3`
  margin: 12px 0 0;
  padding: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`

export const Texts = styled.p`
  margin: 6px 0 0;
  padding: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0d0d0d99;
`