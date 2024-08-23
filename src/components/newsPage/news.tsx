import "./news.css";
import bigIMG from "../images/bigImg.png";
import pink from "../images/pink.png";
import money from "../images/money.png";
import bImg from "../images/bImg.png";
import vector from "../images/icon.png";
import vectorBtn from "../images/Icon.png";
import wallet from "../images/walletImg.png";

function News() {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news__content">
          <h2 className="titles">Новости</h2>
          <div className="news">
            <div className="main-news">
              <img src={bigIMG} alt="" className="news-img" />
              <h3 className="news-title">
                Команда отец-сын говорит, что им удалось
                <br /> восстановить $6 млн утраченной криптовалюты
              </h3>
              <span className="date-news">11.06.2024 12:30</span>
            </div>
            <div className="news-list">
              <div className="list-news">
                <img className="img-news" src={pink} alt="" />
                <div className="info-news">
                  <h3 className="news-title">
                    Команда отец-сын говорит, что им
                    <br /> удалось восстановить $6 млн
                    <br />
                    утраченной криптовалюты
                  </h3>
                  <span className="date-news">11.06.2024 12:30</span>
                </div>
                <img src={vector} alt="" className="news-vectorIcon" />
              </div>
              <div className="list-news">
                <img className="img-news" src={money} alt="" />
                <div className="info-news">
                  <h3 className="news-title">
                    Команда отец-сын говорит, что им
                    <br /> удалось восстановить $6 млн
                    <br />
                    утраченной криптовалюты
                  </h3>
                  <span className="date-news">11.06.2024 12:30</span>
                </div>
                <img src={vector} alt="" className="news-vectorIcon" />
              </div>
              <div className="list-news">
                <img className="img-news" src={money} alt="" />
                <div className="info-news">
                  <h3 className="news-title">
                    Команда отец-сын говорит, что им
                    <br /> удалось восстановить $6 млн
                    <br />
                    утраченной криптовалюты
                  </h3>
                  <span className="date-news">11.06.2024 12:30</span>
                </div>
                <img src={vector} alt="" className="news-vectorIcon" />
              </div>
              <div className="list-news">
                <img className="img-news" src={bImg} alt="" />
                <div className="info-news">
                  <h3 className="news-title">
                    Команда отец-сын говорит, что им
                    <br /> удалось восстановить $6 млн
                    <br />
                    утраченной криптовалюты
                  </h3>
                  <span className="date-news">11.06.2024 12:30</span>
                </div>
                <img src={vector} alt="" className="news-vectorIcon" />
              </div>
            </div>
          </div>
          <div className="details">
            <button className="hero-btn white-btn deatail">
              Подробнее
              <img src={vectorBtn} alt="" />{" "}
            </button>
          </div>
          <div className="ourWallet">
            <h2 className="ourWallet-titles">
              Ваши деньги <br />
              обратно в вашем <br />
              кармане!
            </h2>
            <img src={wallet} alt="" className="our-wallet" />
            <div className="textBtn">
              <span className="ourWallet-texts">
                Возьми свои финансы снова
                <br /> под контроль. Нажми на <br /> "Оставить заявку", чтобы
                <br /> получить помощь.
              </span>
              <button className="hero-btn white-btn2">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
