import { BASE_URL } from "@/API/url"
import { Header } from "@/components/Header/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const BookSingle = () => {
  const [authorBook, setAuthorBook] = useState([])

  const BookId = useParams();

  const token = ((state) => state.token.token)

  useEffect(() => {
    fetch(BASE_URL + `book/bookId/${BookId.id}`, {
      headers: {
        Authorization: token
      }
    }).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err))
  }, [])


  return (
    <>
      <Header />
      <h3>BookSingle</h3>
    </>
  )
}
