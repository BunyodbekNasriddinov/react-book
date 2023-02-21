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
import { HomeTemuriylar } from "@/components/HomeCategory/Temuriylar";
import { HomeJadid } from "@/components/HomeCategory/Jadid";
import { HomeSovet } from "@/components/HomeCategory/Sovet";
import { HomeMustaqillik } from "@/components/HomeCategory/Mustaqillik";
import { AuthorSingle } from "@/pages/AuthorSingle";

export const Private = () => {
  return <>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='' element={<HomeTemuriylar />} />
        <Route path='temuriylar' element={<HomeTemuriylar />} />
        <Route path='jadidlar' element={<HomeJadid />} />
        <Route path='sovetlar' element={<HomeSovet />} />
        <Route path='mustaqillik' element={<HomeMustaqillik />} />
      </Route>
      <Route path='/books' element={<Books />} >
        <Route path='' element={<Temuriylar />} />
        <Route path='temuriylar' element={<Temuriylar />} />
        <Route path='jadidlar' element={<Jadid />} />
        <Route path='sovetlar' element={<Sovet />} />
        <Route path='mustaqillik' element={<Mustaqillik />} />
      </Route>

      <Route path='/author/:id' element={<AuthorSingle />} />

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
