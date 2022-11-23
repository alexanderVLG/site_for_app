import React, {Component} from "react";
import '../styles/LoyaltyCards.css';
import loyaltyIcon from '../img/loyaltyIcon.svg';
import loyaltyIcon2 from '../img/loyaltyIcon2.svg';
import loyaltyIcon3 from '../img/loyaltyIcon3.svg';

class LoyaltyCards extends Component {
  render () {
    return (
      <>
      <div className="loyalty__card--container">
        <div className='loyalty__card'>
          <div className='img__container'>
            <img src={loyaltyIcon} alt="" />
          </div>
          <h3>Баллы Лояльности</h3>
          <p>Собирайте баллы в каждом<br/> магазине и обменивайте<br/> их на чай</p>
        </div>
        <div className='loyalty__card'>
          <div className='img__container'>
            <img src={loyaltyIcon2} alt="" />
          </div>
          <h3>Эксклюзивная скидка<br/> в магазине</h3>
          <p>Вы можете воспользоваться<br/> множеством скидок в выбранных магазинах рядом с вами</p>
        </div>
        <div className='loyalty__card'>
          <div className='img__container'>
            <img src={loyaltyIcon3} alt="" />
          </div>
          <h3>T.Pass Бесплатные Напитки</h3>
          <p>2 чая за 490&#8381; каждый месяц.<br/> И вы можете перенести их<br/> на следующий месяц</p>
        </div>
      </div>
      </>
    );
  }
}

export default LoyaltyCards;
