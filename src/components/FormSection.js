import React, {Component} from "react";
import '../styles/FormSection.css';
import formIcon from '../img/formIcon.svg';
import appstore from '../img/appstore.svg';
import googleplay from '../img/googleplay.svg';

class FormSection extends Component {
  render () {
    return (
      <section className="form">
        <div className="form__container">
          <div className="form__icon">
            <img src={formIcon} alt=''/>
          </div>
          <h3 className="form__title">Насладитесь послеобеденным чаем с закусками</h3>
          <form>
            <div>
              <input type="text"
                      placeholder="Введите ваш номер"
                      className="form__input"
              />
              <button type="button" className="button button__form button__form--wide">Отправить</button>
            </div>
          </form>
          <div className="form__link">
            <figure>
              <a href="https://www.apple.com/ru/app-store/" target="_blank" rel="noreferrer">
                <img src={appstore} alt="ссылка на app store"/>
              </a>
            </figure>
            <figure>
              <a href="https://play.google.com/store/games?hl=ru&gl=US" target="_blank" rel="noreferrer">
                <img src={googleplay} alt="ссылка на google play"/>
              </a>
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

export default FormSection;