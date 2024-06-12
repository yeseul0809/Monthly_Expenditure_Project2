import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import { AuthContext } from "../context/AuthContext";
import { Mypage } from "../pages/Mypage";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/mypage" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mypage" element={<PrivateRoute element={Mypage} />} />
        <Route path="/detail/:id" element={<PrivateRoute element={Detail} />} />
        <Route path="/home" element={<PrivateRoute element={Home} />} />
        <Route path="/SignUp" element={<PublicRoute element={SignUp} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
