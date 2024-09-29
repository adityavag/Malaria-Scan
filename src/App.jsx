import React from "react";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Prevention from "./pages/Prevention";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detection from "./pages/Detection";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Layout/>}></Route>
        <Route path="/" element = {<Layout/>}></Route>
        <Route path="/detect" element = {<Detection/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;