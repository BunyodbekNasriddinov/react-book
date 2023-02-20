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
import { Option } from "../AddAuthor/AddAuthor.style";

export const AddBook = () => {
  const token = useSelector(state => state.token.token);
  const user = useSelector(state => state.user.user);
  const genres = useSelector((state) => state.genres.genres);
  const [genreId, setGenreId] = useState(1)
  const [bookImage, setbookImage] = useState({ objectImg: "", image: "" })

  const initialValues = {
    first_name: "", last_name: "", date_of_birth: "", date_of_death: "", country: "", bio: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    page: Yup.string().required("Page required"),
    price: Yup.string().required("Price required"),
    year: Yup.string()
      .required("Year required"),
    desctiption: Yup.string()
      .required("Desctiption required!"),
  });

  console.log(user);

  const handleSubmit = ({ title, page, year, price, desctiption }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("page", page);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("genre_id", genreId);
    formData.append("author_id", user.id);
    formData.append("description", desctiption);
    formData.append("image", bookImage.image)

    axios.post(BASE_URL + "book", formData, {
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
            <Input as='select' onChange={evt => setGenreId(evt.target.value)}>
              {
                genres.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
              }
            </Input>
            <Input type='text' placeholder='Bio' name='desctiption' />
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