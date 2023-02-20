import {
  AuthorForm,
  AuthorFormButton,
  AuthorWrapper,
  FormBlock,
  Image,
  ImageBlock,
  ImageInput,
  Input,
  Title
} from "@/pages/AddBook/AddBook.style";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "@api/url";
import { toast } from "react-toastify";
import { Error } from "@components/ProfileEdit/ProfileEdit.style";
import { useSelector } from "react-redux";
import { useState } from "react";

export const AddBook = () => {
  const token = useSelector(state => state.token.token);
  const [bookImage, setbookImage] = useState({ objectImg: "", image: "" })

  const initialValues = {
    first_name: "", last_name: "", date_of_birth: "", date_of_death: "", country: "", genre_id: "", bio: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    page: Yup.string().required("Page required"),
    price: Yup.string().required("Price required"),
    year: Yup.string()
      .required("Year required"),
    genre_id: Yup.string()
      .required("Genre id required!"),
    author_id: Yup.string()
      .required("Author id required!"),
    desctiption: Yup.string()
      .required("Desctiption required!"),
  });


  const handleSubmit = ({ title, page, year, price, author_id, genre_id, desctiption }) => {
    const formData = new FormData();
    console.log(token);
    formData.append("title", title);
    formData.append("page", page);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("author_id", author_id);
    formData.append("genre_id", genre_id);
    formData.append("desctiption", desctiption);
    formData.append("image", bookImage.image)

    axios.post(BASE_URL + "author", formData, {
      headers: {
        Authorization: token,
      }
    })
      .then(data => {
        console.log(data)
        if (data.status === 201) {
          toast.success("You have successfully registered");
        }
      })
      .catch((err) => {
        console.log(err)
        if (err) {
          toast.error("Something went wrong!!!");
        }
      })
  }

  const handleImage = (evt) => {
    setbookImage({
      objectImg: URL.createObjectURL(evt.currentTarget.files[0]), image: evt.currentTarget.files[0],
    })
  }

  return <>
    <AuthorWrapper>
      <ImageBlock>
        {bookImage.objectImg ?
          <Image src={bookImage?.objectImg} width='250' height='300' alt={bookImage.image.file_name} /> : ""}
        <ImageInput onChange={(evt) => handleImage(evt)} type='file' />
      </ImageBlock>
      <FormBlock>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <AuthorForm>
            <Title>Add book</Title>
            <Input type='text' placeholder='Title' name='title' />
            <Error>
              <ErrorMessage name='title' />
            </Error>
            <Input type='text' placeholder='Pages' name='page' />
            <Error>
              <ErrorMessage name='page' />
            </Error>
            <Input type='text' placeholder='Year' name='year' />
            <Error>
              <ErrorMessage name='year' />
            </Error>
            <Input type='text' placeholder='Price' name='price' />
            <Error>
              <ErrorMessage name='price' />
            </Error>
            <Input type='text' placeholder='Genre id' name='genre_id' />
            <Error>
              <ErrorMessage name='genre_id' />
            </Error>
            <Input type='text' placeholder='Author id' name='author_id' />
            <Error>
              <ErrorMessage name='author_id' />
            </Error>
            <Input type='text' placeholder='Desctiption' name='desctiption' />
            <Error>
              <ErrorMessage name='desctiption' />
            </Error>
            <AuthorFormButton type='submit'>Create</AuthorFormButton>
          </AuthorForm>
        </Formik>
      </FormBlock>
    </AuthorWrapper>
  </>
}