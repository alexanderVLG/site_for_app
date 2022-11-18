import React, {Component} from 'react';
import Menu from './Menu.js';
import '../styles/Navbar.css';
import Logo from'../img/Logo.svg';
//import bgImage2 from '../img/bgImage2.svg';
import bgImage2 from '../img/bgImage2.png';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible : false
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleOnClick (e) {
    this.toggleMenu();

    e.stopPropagation();
  }


  toggleMenu () {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
    <>
      <Menu handleOnClick={this.handleOnClick}
            menuVisibility={this.state.visible}/>
      <header>
        <div className='header__top'>
          <a href="index.html">
            <img src={Logo} alt=""/>
          </a>
          <div className='burger__menu'
                onClick={this.handleOnClick}>
            <span></span>
          </div>      
          <nav className='desktop__nav'>
            <ul>
              <li><a href="#">Магазины</a></li>
              <li><a href="#">Помощь и Поддержка</a></li>
              <li><a href="#" className='header__button'>Установить</a></li>
            </ul>
          </nav>
        </div>
        <div className='header__bottom'>
          <div className='left__container'>
            {/*Нужно изменить заголовок на h1 */}
            <h2>
              <span>Заказывайте заранее </span>
              и получайте вознаграждение за каждую покупку<span>.</span>
            </h2>
            <a href="#" ><button className="button button__header">Узнайте, как</button></a>
          </div>
          <figure className='right__container'>
            <img src={bgImage2} alt="На фото парень угощает девушку чаем"/>
          </figure>
        </div>
      </header>
    </> 
    );
  }
}

export default Navbar;