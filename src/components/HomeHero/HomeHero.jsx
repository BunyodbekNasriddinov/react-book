import React from "react";
import { Container } from "../GlobalStyle";
import {
  HeroWrapper,
  Input,
  ListCarousel,
  SearchBar,
  SearchBarButton,
  SearchBarForm,
  SearchBarTitle,
  Title,
} from "./HomeHero.style";
import { Formik } from "formik";
import * as Yup from "yup";
import Slider from "react-slick";

export const HomeHero = () => {
  const initialValues = {
    book: "",
  };

  const validationSchema = Yup.object({
    book: Yup.string().required("Book name required!!!"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  }


  return (
    <HeroWrapper>
      <Container>
        <ListCarousel>
          <Slider {...settings}>
            <Title>Temuriylar davri adabiyoti</Title>
            <Title>Jadid davri adabiyoti</Title>
            <Title>Sovet davri adabiyoti</Title>
            <Title>Mustaqillik davri adabiyoti</Title>
          </Slider>
        </ListCarousel>
        <SearchBar>
          <SearchBarTitle>Qidirmoq</SearchBarTitle>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <SearchBarForm>
              <Input
                type="text"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
                name="book"
              />
              <SearchBarButton>Izlash</SearchBarButton>
            </SearchBarForm>
          </Formik>
        </SearchBar>
      </Container>
    </HeroWrapper>
  );
};
