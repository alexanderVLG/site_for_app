import React, {Component} from 'react';
import '../styles/ExplainSection2.css';
import phone from '../img/phone.png';

class ExplainSection2 extends Component {
  render() {
    return (
      <section className='explain__section2'>
        <div className='explain__container2'>
            <img className="section2__img" src={phone} alt="Смартфон в котором открыто приложение TPass, позади смартфона фирменный чай в  пластиковом стакане." />
          <div className='section2__text'>
            <h3>Ваш ежедневный приём</h3>
            <h3>Как это работает</h3>
            <p>Начните выбирать свои любимые чаи и закуски в близлежащих магазинах и оформляйте заказы, накапливайте баллы, делитесь подарками и чаями со своими друзьями и коллегами и, наконец, используйте наш T-Pass, чтобы получить бесплатные напитки.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ExplainSection2;