import React, {Component} from "react";
import '../styles/ExplainSection4.css';
import phone2 from "../img/phone2.png";

class ExplainSection4 extends Component {
  render () {
    return (
      <section className="explain__section4">
        <div className="explain__container4">
          <div className="section4__text">
            <h3>Порадуйте своих друзей</h3>
            <h3>Отправляйте подарки и делайте заказы для групп</h3>
            <p>Отправляйте ценные подарки своим друзьям и родственникам и используйте их в их любимых магазинах.   Станьте рок-звездой, делайте групповые заказы и забирайте вещи для своих коллег, когда они не могут уйти.
            </p>
          </div>
          <img className="section4__img" src={phone2} alt="Смартфон в котором открыто приложение TPass, позади смартфона фирменный чай в  пластиковом стакане и ягоды голубики."/>
        </div>
      </section>
    );
  }
}

export default ExplainSection4;