import React, {Component} from 'react';
import LoyaltyCards from './LoyaltyCards';
import '../styles/ExplainSection3.css';
import woman from '../img/woman.png';

class ExplainSection3 extends Component {
  render () {
    return (
      <section className='explain__section3'>
        <div className='explain__container3'>
          <LoyaltyCards/>
          <div className='test2'>
            <img src={woman} alt="Девушка"/>
          </div>
        </div>
      </section>
    );
  }
}

export default ExplainSection3;