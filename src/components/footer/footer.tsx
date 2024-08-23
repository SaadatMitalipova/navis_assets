import "./footer.css";
import logo from "../images/logo.png";
import whatsap from "../images/whatsapp.png";
import insta from "../images/instagram.png";
import telegram from "../images/telegram.png";
import tiktok from "../images/tiktok.png";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <img src={logo} alt="" className="logo-img" />
            <span className="footer__logo-text">
              Это международный сервис, где вам <br />
              быстро и надежно восстановят ваш
              <br />
              забытый криптокошелёк
            </span>
            <Link to="" className="our-email">
              NAVISASSET@MAIL.COM
            </Link>
          </div>
          <div className="footer__main-boxs">
            <div className="footer__main">
              <h3 className="footer__main-title">Основное </h3>
              <div className="footer__links">
                <Link to="" className="footer__link">
                  О нас
                </Link>
                <Link to="" className="footer__link">
                  Контакты
                </Link>
                <Link to="" className="footer__link">
                  Партнеры
                </Link>
                <Link to="" className="footer__link">
                  Почему
                  <br /> NavisAsset?
                </Link>
              </div>
            </div>
            <div className="footer__main">
              <h3 className="footer__main-title">Пользователям</h3>
              <div className="footer__links">
                <Link to="" className="footer__link">
                  Услуги
                </Link>
                <Link to="" className="footer__link">
                  Отзывы
                </Link>
                <Link to="" className="footer__link">
                  Прайс
                </Link>
                <Link to="" className="footer__link">
                  Новости
                </Link>
              </div>
            </div>
            <div className="social__networks">
              <h3 className="footer__main-title">Мы в соцсетях</h3>

              <div className="socials">
                <img src={whatsap} alt="" className="social__network" />
                <img src={insta} alt="" className="social__network" />
                <img src={telegram} alt="" className="social__network" />
                <img src={tiktok} alt="" className="social__network" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-ruler"></div>
      <div className="texts-footer">
        <p className="end-text">© 2024 NavisAsset Все права защищены</p>
        <h2>
          Made with ❤️ by <a href="">NavisDevs</a>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
