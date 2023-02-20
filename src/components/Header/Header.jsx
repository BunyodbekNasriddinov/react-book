import { Container } from "../GlobalStyle/GlobalStyle";
import {
  Button,
  DropDonwLink,
  DropDownButton,
  DropDownItem,
  DropDownList,
  DrowDownBlock,
  HeaderBlock,
  HeaderWrapper,
  Image,
  Item,
  List,
  LogoLink,
  Navbar,
} from "./Header.style";
import axios from 'axios';
import { useEffect, useState } from "react";
import { BASE_URL } from "@/API/url";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "@/redux/user/userAction";
import { removeToken } from "@/redux/token/tokenAction";
import { useNavigate, NavLink } from "react-router-dom";
import { setGenres } from "@/redux/genres/genresAction";


export const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  const user = useSelector((state) => state.user.user);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(BASE_URL + 'user/me', {
      headers: {
        Authorization: token
      }
    }).then(data => {
      if (data.status === 201) {
        dispatch(setUser(data.data));
      }
    })

    axios.get(BASE_URL + 'genre').then(data => {
      if (data.status === 201) {
        dispatch(setGenres(data.data));
      }
    })
  }, [])

  const handleModal = () => {
    setModal(!modal)
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(removeToken());
    navigate('/');
  }

  const modalStyle = {
    "display": "block"
  }

  return (
    <HeaderBlock>
      <Container>
        <HeaderWrapper>
          <LogoLink to="/">Badiiyat</LogoLink>
          <Navbar>
            <List>
              <Item>
                <NavLink to="/" className={({ isActive }) => isActive ? 'header-active' : 'header-noactive'} >
                  Bosh sahifa
                </NavLink>
              </Item>
              <Item>
                <NavLink to="/books" className={({ isActive }) => isActive ? 'header-active' : 'header-noactive'} >
                  Kitoblar
                </NavLink>
              </Item>
              <Item>
                <Button onClick={handleModal} >
                  {
                    user.image ? <Image src={BASE_URL + user.image} width='50' height='50' alt={user.first_name + ' image'} /> : `${user?.first_name?.at(0)}.${user?.last_name?.at(0)}`
                  }
                </Button>
                <DrowDownBlock style={modal ? modalStyle : { display: 'none' }}>
                  <DropDownList>
                    <DropDownItem>
                      <DropDonwLink to='/profile'>Profile</DropDonwLink>
                    </DropDownItem>
                    <DropDownItem>
                      <DropDonwLink to='/addauthor'>Add author</DropDonwLink>
                    </DropDownItem>
                    <DropDownItem>
                      <DropDonwLink to='/addbook'>Add book</DropDonwLink>
                    </DropDownItem>
                    <DropDownButton onClick={handleLogout} className={({ isActive }) => isActive ? "show" : ""} >Log out</DropDownButton>
                  </DropDownList>
                </DrowDownBlock>
              </Item>
            </List>
          </Navbar>
        </HeaderWrapper>
      </Container>
    </HeaderBlock>
  );
};
