import { BASE_URL } from "@/API/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { AuthorCard } from "../AuthorCard/AuthorCard";
import { Container } from "../GlobalStyle/GlobalStyle";
export const HomeJadid = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + 'author/genreId/2').then((data) => {
      if (data.status === 201) {
        setBook(data.data);
      }
    });
  }, []);

  return (
    <Container>
      <div className="row my-5 gap-3 justify-content-center">
        {book.map((book) => <AuthorCard obj={book} key={book.id} />)}
      </div>
    </Container>
  );
};