import { ToastContainer } from "react-toastify";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Route, Routes } from "react-router-dom";
import { ProfileEdit } from "@/components/ProfileEdit";
import { Security } from "@/components/Security";
import { Settings } from "@/components/Settings/Settings";
import { Books } from "@/pages/Books/Books";
import { Jadidlar, Mustaqillik, Sovetlar, Temuriylar } from '@/components/HomeCategory';
import { AddAuthor } from "@pages/AddAuthor";
import { AddBook } from "@/pages/AddBook";

export const Private = () => {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<Books />} >
        <Route index path='temuriylar' element={<Temuriylar />} />
        <Route path='jadidlar' element={<Jadidlar />} />
        <Route path='sovetlar' element={<Sovetlar />} />
        <Route path='temuriylar' element={<Mustaqillik />} />
      </Route>
      <Route path='/profile' element={<Profile />} >
        <Route path='/profile' element={<ProfileEdit />} />
        <Route path='edit' element={<ProfileEdit />} />
        <Route path='security' element={<Security />} />
        <Route path='settings' element={<Settings />} />
      </Route>
      <Route path='/addauthor' element={<AddAuthor />} />
      <Route path='/addbook' element={<AddBook />} />
    </Routes>

    <ToastContainer />
  </>;
};
