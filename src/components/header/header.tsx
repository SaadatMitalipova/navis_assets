import { Link } from "react-router-dom";
import "./header.css";
import logo from "../images/logo.png";
import React, { useState } from "react";

function Header() {
  const [language, setLanguage] = useState<"РУС" | "ENG">("РУС");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "РУС" ? "ENG" : "РУС"));
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-logo">
            <img src={logo} alt="" className="logo-navis" />
          </div>
          <div className="header__nav">
            <Link className="LinkNav" to="/vacancies">
              Услуги
            </Link>
            <Link className="LinkNav" to="/events">
              Прайс
            </Link>
            <Link className="LinkNav" to="/video">
              Отзывы
            </Link>
            <Link className="LinkNav" to="/organizations">
              О нас
            </Link>
            <Link className="LinkNav" to="/community">
              Контакты
            </Link>
          </div>

          <div className="header-language">
            <div className="languageSwitcher" onClick={toggleLanguage}>
              <span className="flag">{language === "РУС" ? "🇷🇺" : "🇺🇸"}</span>
              <span>{language}</span>
            </div>
            <button className="start">
              {language === "РУС" ? "Начать" : "Start"}
            </button>{" "}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
