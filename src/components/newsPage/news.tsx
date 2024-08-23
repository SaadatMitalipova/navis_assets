import "./news.css";
import bigIMG from "../images/bigImg.png";
import pink from "../images/pink.png";
import money from "../images/money.png";
import bImg from "../images/bImg.png";
import vector from "../images/icon.png";

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
        </div>
      </div>
    </section>
  );
}

export default News;
