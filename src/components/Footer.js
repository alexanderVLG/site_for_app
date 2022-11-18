import React, {Component} from 'react';
import '../styles/Footer.css';
import logofooter from '../img/logofooter.svg';
import leaf1 from '../img/leaf1.svg';
import leaf2 from '../img/leaf2.svg';
import leaf3 from '../img/leaf3.svg';

class Footer extends Component {
  render () {
    return (
      <footer className='page-footer'>
        <div className='footer__container'>
          <img className="footer__image footer__image--position1" src={leaf1} alt=""/>
          <img className="footer__image footer__image--position2" src={leaf2} alt=""/>
          <img className="footer__image footer__image--position3" src={leaf3} alt=""/>
          <div className='footer__logo'>
            <a href="#"><img src={logofooter} alt="логотип"/></a>
          </div>
          <ul className='footer__list'>
            <li><h4>Компания</h4></li>
            <li><a href="#">Торговый портал</a></li>
          </ul>
          <ul className='footer__list'>
            <li><h4>Поддержка</h4></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Условия обслуживания</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
          </ul>
          <ul className='footer__list'>
            <li><h4>Следите за нами</h4></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;