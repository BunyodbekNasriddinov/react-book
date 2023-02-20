import { Formik } from 'formik'
import { Container } from '../GlobalStyle/GlobalStyle'
import { Input, Block, ProfileForm, ProfileImage, ProfileTitle, ProfileWrapper, Error, ProfileEditButton, Line, Label, ProfileImgFile, ProfileImageWrapper } from './ProfileEdit.style'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '@/API/url';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'formik';
import AvatarIcon from '@images/avatar.jpeg'
import { useEffect, useState } from 'react';
import { setUser } from '@/redux/user/userAction';

export const ProfileEdit = () => {
  const token = useSelector(state => state.token.token);
  const user = useSelector((state) => state.user.user);
  const [profileImage, setProfileImage] = useState();

  const initialValues = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone: user?.phone,
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Please enter your first name."),
    last_name: Yup.string().required("Please enter your last name."),
    phone: Yup.string()
      .required("Please enter your  phone number.")
      .min(9, "Invalid phone number!")
      .max(9, "Invalid phone number!"),
  });

  const formData = new FormData();

  const handleSubmit = (values) => {
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("phone", values.phone);
    formData.append("image", profileImage);

    axios.put(BASE_URL + "user/account", formData, {
      headers: {
        Authorization: token
      },
    })
      .then(data => {
        if (data.status === 201) {
          toast.success("You have successfully updete");
        }
      })
  }

  useEffect(() => {
    axios.get(BASE_URL + 'user/me', {
      headers: {
        Authorization: token
      }
    }).then(data => {
      if (data.status === 201) {
        dispatch(setUser(data.data));
      }
    })
  }, []);

  return (
    <Container>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={BASE_URL + user?.image || BASE_URL + profileImage || AvatarIcon} width='175' height='175' alt={user?.first_name + ' image'} />
          <ProfileImgFile onChange={(evt) => setProfileImage(evt.currentTarget.files[0])} type='file' />
        </ProfileImageWrapper>
        <Block>
          <ProfileTitle>My profile</ProfileTitle>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ProfileForm>
              <Label htmlFor='first_name'>First Name</Label>
              <Input tpye="text" id='first_name' placeholder="First name" name="first_name" />
              <Error>
                <ErrorMessage name="first_name" />
              </Error>
              <Label htmlFor='last_name'>Last Name</Label>
              <Input tpye="text" id='last_name' placeholder="Last name" name="last_name" />
              <Error>
                <ErrorMessage name="last_name" />
              </Error>
              <Label htmlFor='phone'>Phone</Label>
              <Input tpye="text" id='phone' placeholder="Phone" name="phone" />
              <Error>
                <ErrorMessage name="phone" />
              </Error>
              <Line />
              <ProfileEditButton type="submit">Save Changes</ProfileEditButton>
            </ProfileForm>
          </Formik>
        </Block>
      </ProfileWrapper>
    </Container>
  )
}
