import "./advantage.css";
function Advantage() {
  return (
    <section className="advantage">
      <div className="container">
        <div className="advantage__content">
          <h2 className="titles">Почему выбирают Navis Asset?</h2>
          <div className="divs">
            <div className="unlock-wallet">
              <span className="unlock-wallet-text">
                Наша панель пользователя позволяет вам загружать данные в любое
                время
              </span>
              <h3 className="unlock-wallet-title">
                Восстановим ваш заблокированный кошелёк
              </h3>
              <div className="one">01</div>
            </div>
            <div className="unlock-wallet">
              <span className="unlock-wallet-text">
                Гарантируем, что резервная копия зашифрованного кошелька будет
              </span>
              <h3 className="unlock-wallet-title">
                Ваш кошелёк будет защищен воздушной прослойкой
              </h3>
              <div className="one">02</div>
            </div>
            <div className="unlock-wallet">
              <span className="unlock-wallet-text">
                Наша панель пользователя позволяет вам загружать данные в любое
                время
              </span>
              <h3 className="unlock-wallet-title">
                Ваш забытый пароль будет восстановлен{" "}
              </h3>
              <div className="one">03</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
