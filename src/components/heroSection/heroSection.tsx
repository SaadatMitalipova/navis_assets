import "./heroSection.css";
import wallet from "../images/walletImg.png";
import vectorBtn from "../images/Icon.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__section heroWhite">
            <h1 className="hero-title">
              Простое и прозрачное восстановление кошелька
            </h1>
            <span className="hero-text">
              Самый простой способ восстановить свой потерянный пароль от
              кошелька и расследовать обманутую криптовалюту
            </span>
            <div className="hero-btns">
              <button className="hero-btn orange-btn">Оставить заявку</button>
              <button className="hero-btn white-btn">
                Подробнее
                <img src={vectorBtn} alt="" />{" "}
              </button>
            </div>
          </div>
          <div className="hero__section wallet-img">
            <img src={wallet} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
