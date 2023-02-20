import { Header } from '@/components/Header';
import { HomeCategory } from '@/components/HomeCategory/HomeCategory';
import { HomeHero } from '@/components/HomeHero';
import React from 'react'
import { Outlet } from "react-router-dom";

export const Books = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeCategory />
      <Outlet />
    </>
  )
}
