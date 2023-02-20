import { Header } from "@/components/Header";
import { HomeCategory } from "@/components/HomeCategory/HomeCategory";
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
