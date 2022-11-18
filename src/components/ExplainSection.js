import React, {Component} from 'react';
import "../styles/ExplainSection.css";
import roundIcon1 from '../img/roundIcon1.svg';
import roundIcon2 from '../img/roundIcon2.svg';
import roundIcon3 from '../img/roundIcon3.svg';


class ExplainSection extends Component {
  render() {
    return (
      <section className='explain__section'>
        <div className='explain__container'>
          <div className='explain__item'>
            <div>
              <img src={roundIcon1} alt="Картинка-1"/>
            </div>
            <h3>Заказывайте заранее, не стойте в очереди</h3>
            <p>Почувствуйте себя рок-звездой, когда вы обходите очередь и экономите кучу времени.</p>
          </div>
          <div className='explain__item'>
            <div>
              <img src={roundIcon2} alt="Картинка-2"/>
            </div>
            <h3>Бонусы и скидки</h3>
            <p>Вы можете пользоваться множеством скидок в выбранных магазинах или накапливать баллы.</p>
          </div>
          <div className='explain__item'>
            <div>
              <img src={roundIcon3} alt="Картинка-3"/>
            </div>
            <h3>Поделитесь со своими друзьями</h3>
            <p>Отправляйте подарки своим друзьям, родственникам и забирайте их для своих коллег, когда они не могут уйти.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ExplainSection;