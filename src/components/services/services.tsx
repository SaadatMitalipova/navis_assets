import React from "react";
import "./services.css";
import key from "../images/key.png";
import communucation from "../images/sms.png";
import no from "../images/no.png";
import icon from "../images/icon (3).png";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services__content">
          <h2 className="advantage-title">Мы поможем вам, если</h2>
          <div className="services-blocks">
            <div className="block block-orange">
              <img src={key} alt="" className="block-icon" />
              <h3 className="block-title orange-title">Если ваш пароль не работает</h3>
              <span className="orange-text">
                Вы думали, что знаете свой пароль, но теперь он не разблокирует
                ваш кошелек. Возможно, в нем используются другие цифры или
                другая заглавная буква, чем вы помните.
              </span>
            </div>
            <div className="block">
              <img src={communucation} alt="" className="block-icon" />
              <h3 className="block-title">
                Частичное восстановление исходной фразы
              </h3>
              <span className="block-text">
                Вы записали список слов, а парольная фраза - это некая
                комбинация этих слов.
              </span>
            </div>
            <div className="block">
              <img src={no} alt="" className="block-icon" />
              <h3 className="block-title">
                Потеряли доступ к кошельку крупной сети
              </h3>
              <span className="block-text">
                Вы потеряли доступ к обычному криптоактиву, такому как Bitcoin,
                Ethereum, Litecoin, Dogecoin, NFT или десяткам других альткоинов
              </span>
            </div>
            <div className="block">
              <img src={icon} alt="" className="block-icon" />
              <h3 className="block-title">Вас обманули мошенники</h3>
              <span className="block-text">
                Мы предлагаем услуги по розыску (а не по взысканию) для тех, кто
                хочет построить свое дело и, возможно, раскрыть реальную
                личность мошенника.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
