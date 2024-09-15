import React from "react";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Prevention from "./pages/Prevention";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const App = () => {
  // const {t} = useTranslation();

  // const handleLanguageChange = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  return (
    <div>
      <Landing />
      <Features />
      <Prevention />
    </div>
  )
}

export default App;