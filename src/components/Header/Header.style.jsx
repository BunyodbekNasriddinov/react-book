import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  padding: 22px 0;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const Navbar = styled.nav`
  margin-left: auto;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  column-gap: 42px;
`;

export const Item = styled.li`
  position: relative;
`;

export const LogoLink = styled(NavLink)` 
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  font-size: 25px;
  line-height: 38px;
  color: #d1b89d;
`;

export const Button = styled.button`
  padding: 0;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 50%;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const DrowDownBlock = styled.div`
  position: absolute;
  top: 56px;
  z-index: 2;
  width: 140px;
  background-color: #F5F5F5;
  border-radius: 10px;
`

export const DropDownList = styled.ul`
  margin: 0;
  padding: 0;
  width: 140px;
  list-style-type: none;
`
export const DropDownItem = styled.li`
  width: 140px;
`

export const DropDonwLink = styled(Link)`
  display: block;
  padding: 8px 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  border-radius: 10px;
    text-decoration: none;

  &:hover {
    background-color: #dbdbdb;
  }
`
export const DropDownButton = styled.button`
  display: block;
  padding: 8px 24px;
  width: 100%;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  text-align: left;
  border-radius: 10px;

  &:hover {
    color: #ffffff;
    background-color: #ff0000b2;
  } 
`
