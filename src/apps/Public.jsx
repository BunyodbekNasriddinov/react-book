import { ToastContainer } from "react-toastify";
import { Login } from "@/pages/Login/";
import { Route, Routes } from "react-router-dom";
import { Register } from "@/pages/Register";

export const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
