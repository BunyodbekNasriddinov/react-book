import styled from "styled-components";
import { Form, Field } from "formik";
import HeroBgi from "@images/home-hero-bgi.png";
import SearchIcon from "@images/search-icon.svg";

export const HeroWrapper = styled.div`
  position: relative;
`;

export const ListCarousel = styled.div`
  margin: 0;
  padding: 45px 0 100px 86px;
  background-image: url(${HeroBgi});
  background-repeat: no-repeat;
  border-radius: 21px;
`;

export const Item = styled.div`

`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  max-width: 337px;
  width: 100%;
  font-family: "Rotterburg Stylish FREE";
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;
  color: #d1b89d;
`;

// Searchbar

export const SearchBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -82px;
  margin: 0 auto;
  padding: 29px 0;
  max-width: 1030px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const SearchBarTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
`;

export const SearchBarForm = styled(Form)`
  display: flex;
  align-items: center;
  margin: 8px auto 0;
  max-width: 710px;
  width: 100%;
`;

export const Input = styled(Field)`
  padding: 12px 0 12px 27px;
  max-width: 710px;
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0d0d0d4c;
  background-color: #f5f5f5;
  border-radius: 15px;
  border: none;
  outline: #716c6c;
`;

export const SearchBarButton = styled.button`
  display: inherit;
  margin-left: 14px;
  padding: 12px 42px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #efdac3;
  background-color: #c9ac8c;
  border-radius: 15px;
  border: none;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 10px;
    width: 24px;
    height: 24px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
  }
`;
