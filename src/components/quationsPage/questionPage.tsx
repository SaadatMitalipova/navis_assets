import "./questionPage.css";
import minus from "../images/mines.png";
import plus from "../images/plus.png";

function QuestionPage() {
  return (
    <section className="questions-section">
      <div className="container">
        <div className="questions__content">
          <h2 className="titles">
            Ответы на часто <br />
            задаваемые вопросы
          </h2>
          <div className="questions">
            <div className="question">
              <div className="first-question">
                <h4 className="question-title">Как это все работает?</h4>
                <span className="question-text">
                  Методы, которые мы используем для восстановления учетных
                  записей наших клиентов, <br />
                  сильно различаются в зависимости от конкретного случая. В
                  случае восстановления пароля мы <br />
                  проводим наших клиентов через извлечение резервной копии
                  зашифрованного закрытого ключа <br /> и составление полного
                  списка возможных вариантов паролей. Затем мы передаем данные
                  <br /> клиента на защищенные серверы для взлома паролей,
                  которые используют полученные от <br />
                  клиента данные для перебора миллиардов или триллионов
                  возможных комбинаций паролей, пока <br /> не будет найден
                  правильный пароль.
                </span>
              </div>
              <img className="question-icon" src={minus} alt="" />
            </div>
            <div className="ruler-question"></div>
            <div className="question">
              <h4 className="question-title">
                Я должен ли вам сказать свой пароль полностью?
              </h4>
              <img className="question-icon" src={plus} alt="" />
            </div>
            <div className="ruler-question"></div>

            <div className="question">
              <h4 className="question-title">
                Сколько времени занимает восстановление кошелька?
              </h4>
              <img className="question-icon" src={plus} alt="" />
            </div>
            <div className="ruler-question"></div>

            <div className="question">
              <h4 className="question-title">
                Как я могу вам довериться, вы не украдете мои деньги?
              </h4>
              <img className="question-icon" src={plus} alt="" />
            </div>
            <div className="ruler-question"></div>

            <div className="question">
              <h4 className="question-title">
                Какие виды криптовалютных кошельков вы восстановливаете?
              </h4>
              <img className="question-icon" src={plus} alt="" />
            </div>
            <div className="ruler-question"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionPage;
