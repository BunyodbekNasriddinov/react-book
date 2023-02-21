import { Header } from "@/components/Header";
import { HomeCategory } from "@/components/HomeCategory";
import { HomeHero } from "@/components/HomeHero";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeCategory />
    </>
  )
}
