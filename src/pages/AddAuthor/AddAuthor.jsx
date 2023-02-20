import {
  AuthorForm,
  AuthorFormButton,
  AuthorWrapper,
  FormBlock,
  Image,
  ImageBlock,
  ImageInput,
  Input,
  Option,
  Title
} from "@/pages/AddAuthor/AddAuthor.style";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "@api/url";
import { toast } from "react-toastify";
import { Error } from "@components/ProfileEdit/ProfileEdit.style.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const AddAuthor = () => {
  const token = useSelector(state => state.token.token);
  const genres = useSelector((state) => state.genres.genres);
  const [authorImage, setAuthorImage] = useState({ objectImg: "", image: "" });
  const [genreId, setGenreId] = useState(1);

  const initialValues = {
    first_name: "", last_name: "", date_of_birth: "", date_of_death: "", country: "", genre_id: "", bio: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name required"),
    last_name: Yup.string().required("Last name required"),
    date_of_birth: Yup.string()
      .required("A date of birdth required!"),
    country: Yup.string()
      .required("Country required!"),
    bio: Yup.string().required('Bio required')
  });

  const handleSubmit = ({ first_name, last_name, date_of_birth, date_of_death, country, genre_id, bio }) => {
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("date_of_birth", date_of_birth);
    formData.append("date_of_death", date_of_death);
    formData.append("country", country);
    formData.append("genre_id", genreId);
    formData.append("bio", bio);
    formData.append("image", authorImage.image)

    axios.post(BASE_URL + "author", formData, {
      headers: {
        Authorization: token,
      }
    })
      .then(data => {
        console.log(data)
        if (data.status === 201) {
          toast.success("You have successfully add author");
        }
      })
      .catch((err) => {
        console.log(err)
        if (err) {
          toast.error("Something went wrong!!!");
        }
      })
  }

  console.log(genres);

  const handleImage = (evt) => {
    setAuthorImage({
      objectImg: URL.createObjectURL(evt.currentTarget.files[0]), image: evt.currentTarget.files[0],
    })
  }

  const handleChange = (evt) => {
    setGenreId(evt.target.value);
    console.log(evt.target.value);
  }

  return <>
    <AuthorWrapper>
      <ImageBlock>
        {authorImage.objectImg ?
          <Image src={authorImage?.objectImg} width='250' height='300' alt={authorImage.image.first_name} /> : ""}
        <ImageInput onChange={(evt) => handleImage(evt)} type='file' />
      </ImageBlock>
      <FormBlock>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <AuthorForm>
            <Title>Add author</Title>
            <Input type='text' placeholder='First name' name='first_name' />
            <Error>
              <ErrorMessage name='first_name' />
            </Error>
            <Input type='text' placeholder='Last name' name='last_name' />
            <Error>
              <ErrorMessage name='last_name' />
            </Error>
            <Input type='text' placeholder='Date of birth' name='date_of_birth' />
            <Error>
              <ErrorMessage name='date_of_birth' />
            </Error>
            <Input type='text' placeholder='Date of death' name='date_of_death' />
            <Input type='text' placeholder='Country' name='country' />
            <Error>
              <ErrorMessage name='country' />
            </Error>
            <Input onChange={(evt) => handleChange(evt)} as='select' name='genre_id'>
              {genres?.map(item => <Option key={item.id} value={item.id}>
                {item.name}
              </Option>)}
            </Input>
            <Error>
              <ErrorMessage name='genre_id' />
            </Error>
            <Input type='text' placeholder='Bio' name='bio' />
            <Error>
              <ErrorMessage name='bio' />
            </Error>
            <AuthorFormButton type='submit'>Create</AuthorFormButton>
          </AuthorForm>
        </Formik>
      </FormBlock>
    </AuthorWrapper>
  </>
}