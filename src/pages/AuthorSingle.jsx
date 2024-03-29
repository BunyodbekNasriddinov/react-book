import { book } from "@/API/book";
import { BASE_URL } from "@/API/url";
import { BookCard } from "@/components/BookCard/BookCard";
import { Container } from "@/components/GlobalStyle/GlobalStyle";
import { Header } from "@/components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AuthorPic, AuthorText, InnerDiv, InnerWrapper, SideDiv, Title, WrapperDiv, YearNumbers, Years, Texts, SingleSlider, SingleSliderInner, BookArt, BookList } from "./AuthorSingle.styled";

export const AuthorSingle = () => {
  const [user, setUser] = useState([]);
  const [books, setBooks] = useState([]);
  const authorId = useParams();

  const token = useSelector((state) => state.token.token)

  useEffect(() => {
    fetch(BASE_URL + `author/authorId/${authorId.id}`, {
      method: 'GET',
      headers: { Authorization: token }
    }).then((res) => res.json()).then((data) => {
      if (data) {
        setUser(data);
      }
    }).catch((err) => console.log(err))
  }, [])

  // Books in Slider
  useEffect(() => {
    axios.get(BASE_URL + `author/books/${authorId.id}`, {
      headers: { Authorization: token }
    }).then((data) => {
      if (data) {
        setBooks(data.data)
      }
    }).catch((err) => console.log(err))
  }, [])



  return (
    <>
      <Header />
      <Container>
        {
          user ? <WrapperDiv>
            <InnerDiv>
              <AuthorPic src={BASE_URL + user.image} width='505' height='681' alt='image' />
            </InnerDiv>
            <SideDiv>
              <Title>{user.first_name} {user.last_name}</Title>
              <AuthorText>{user.bio}</AuthorText>
              <InnerWrapper>
                <Years>
                  <Texts>Tavallud sanasi</Texts>
                  <YearNumbers>{user.date_of_birth}</YearNumbers>
                  <Texts>{user.country}</Texts>
                </Years>
                <Years>
                  <Texts>Vafot etgan sanasi</Texts>
                  <YearNumbers>{user.date_of_death}</YearNumbers>
                  <Texts>{user.country}</Texts>
                </Years>
              </InnerWrapper>
            </SideDiv>
          </WrapperDiv> : <h2>Nimadir xato</h2>
        }
        <SingleSlider>
          <SingleSliderInner>
            <BookArt>Asarlari</BookArt>
          </SingleSliderInner>
          <BookArt>
            <Link className="text-decoration-none text-black fs-5" to='/'>Barchasini ko'rish</Link>
          </BookArt>
        </SingleSlider>
        <BookList>
          {
            books.map((book) => <BookCard obj={book} author={user} key={book.id} />)
          }
        </BookList>
      </Container>
    </>
  )
}
