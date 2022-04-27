import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import UpdateBlog from "../pages/UpdateBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route exact path="/" element={<PrivateRouter />}>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/newblog" element={<NewBlog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateblog/:id" element={<UpdateBlog />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
