import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/common/Header";
import AboutPage from "./components/Pages/AboutPage";
import CartPage from "./components/Pages/CartPage";
import ContactPage from "./components/Pages/ContactPage";
import "./index.css"; 
import ErrorPage from "./components/Pages/ErrorPage";
import ResMenu from "./components/Pages/ResMenu";
import Footer from "./components/common/Fotter";
import SearchLocationPage from "./components/Pages/SearchLocationPage";
import Home from "./components/Pages/Home";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";

function App() {
 


  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage /> } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resmenu/:resId" element={<ResMenu />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
