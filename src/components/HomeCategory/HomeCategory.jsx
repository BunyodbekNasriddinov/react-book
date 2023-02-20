import { BASE_URL } from '@/API/url';
import axios from 'axios';
import React, { useEffect } from 'react'
import { Container } from '../GlobalStyle/GlobalStyle';
import { Outlet } from "react-router-dom";
import { CategoryLink, CategoryWrapper, Item, List, Title } from "./HomeCategory.style";


export const HomeCategory = () => {
  return (
    <Container>
      <CategoryWrapper>
        <Title>Asosiy kategoriyalar</Title>
        <List>
          <Item>
            <CategoryLink to='temuriylar'>Temuriylar davri</CategoryLink>
          </Item>
          <Item>
            <CategoryLink to='jadidlar'>Jadid adabiyoti</CategoryLink>
          </Item>
          <Item>
            <CategoryLink to='sovetlar'>Sovet davri</CategoryLink>
          </Item>
          <Item>
            <CategoryLink to='mustaqillik'>Mustaqillik davri</CategoryLink>
          </Item>
        </List>
        <Outlet />
      </CategoryWrapper>
    </Container>
  )
}

export const Temuriylar = () => {
  useEffect(() => {
    axios.get(BASE_URL + '')
  }, [])
  return <>

  </>
}

export const Jadidlar = () => {
  useEffect(() => {
    axios.get(BASE_URL + '')
  }, [])

  return <>

  </>
}
export const Sovetlar = () => {
  useEffect(() => {
    axios.get(BASE_URL + '')
  }, [])

  return <>

  </>
}
export const Mustaqillik = () => {
  useEffect(() => {
    axios.get(BASE_URL + '')
  }, [])

  return <>

  </>
}