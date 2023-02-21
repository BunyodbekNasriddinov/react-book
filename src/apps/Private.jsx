import { ToastContainer } from "react-toastify";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Route, Routes } from "react-router-dom";
import { ProfileEdit } from "@/components/ProfileEdit";
import { Security } from "@/components/Security";
import { Settings } from "@/components/Settings/Settings";
import { Books } from "@/pages/Books/Books";
import { AddAuthor } from "@pages/AddAuthor";
import { AddBook } from "@/pages/AddBook";
import { Temuriylar } from "@/components/BookCategory/Temuriylar";
import { Sovet } from "@/components/BookCategory/Sovet";
import { Mustaqillik } from "@/components/BookCategory/Mustaqillik";
import { Jadid } from "@/components/BookCategory/Jadid";

export const Private = () => {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<Books />} >
        <Route path='' element={<Temuriylar />} />
        <Route path='temuriylar' element={<Temuriylar />} />
        <Route path='jadidlar' element={<Jadid />} />
        <Route path='sovetlar' element={<Sovet />} />
        <Route path='mustaqillik' element={<Mustaqillik />} />
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
