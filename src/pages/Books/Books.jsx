import { Header } from '@/components/Header';
import { HomeHero } from '@/components/HomeHero';
import React from 'react'
import { Outlet } from "react-router-dom";
import { BookCategory } from '@/components/BookCategory/BookCategory';

export const Books = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <BookCategory />
      <Outlet />
    </>
  )
}
